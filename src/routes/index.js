const ping = require('./ping');
const books = require('./books');
// const books = require('./books');

module.exports = [].concat(
  ping,
  books,
);
