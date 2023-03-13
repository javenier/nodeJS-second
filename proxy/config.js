var convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

var config = convict({
  PROXY_PORT: {
    doc: 'The port to proxy',
    format: 'port',
    default: 3001,
    env: 'PROXY_PORT'
  },
  API_PORT: {
    doc: 'The port to api',
    format: 'port',
    default: 3000,
    env: 'API_PORT',
  },
  URL: {
    doc: 'Standart url',
    format: String,
    default: '',
    env: 'URL',
  }
});


module.exports = config;