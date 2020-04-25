const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

passport.use(
  new BasicStrategy((async (username, password, cb) => {
    try {
      const { data, status } = await axios({
        url: `${process.env.API_URL}/api/auth/sign-in`,
        method: 'POST',
        auth: {
          username,
          password,
        },
      });

      if (!data || status !== 200) {
        if (status === 401) {
          cb(boom.unauthorized(), false);
        }
        cb(boom.internal(), false);
      }

      return cb(null, data);

    } catch (e) {
      if (e.response) {
        const { data: error } = e.response;
        return cb(error);
      }
      return cb({ statusCode: 500 });
    }
  })),
);
