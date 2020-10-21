/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import passport from 'passport';
import boom from '@hapi/boom';
import cookieParser from 'cookie-parser';
import main from './routes/main';
import { logErrors, wrapError, errorHandler } from './utils/middlewares/errorHandler';

dotenv.config();

const { NODE_ENV: ENV, PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`));

// Basic strategy
require('./utils/auth/strategies/basic');

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));

} else {
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.post('/auth/sign-in', async (req, res, next) => {
  passport.authenticate('basic', (error, data) => {
    try {
      if (error || !data) {
        if (error.statusCode === 401) {
          return next(boom.unauthorized('Invalid Credentials'));
        }
        return next(boom.internal());
      }

      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
        });

        res.status(200).json(user);
      });

    } catch (e) {
      return next(e);
    }
  })(req, res, next);
});

app.get('*', main);

app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Listening on port ${PORT}`);
});
