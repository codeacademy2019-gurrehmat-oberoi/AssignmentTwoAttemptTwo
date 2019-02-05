const axios = require('axios');

module.exports = {
  httpGet: url => axios.get(url),
};
