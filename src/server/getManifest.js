import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  } catch (e) {
    return {
      'main.css': '/assets/app.css',
      'main.js': '/assets/app.js',
    };
  }
};

export default getManifest;
