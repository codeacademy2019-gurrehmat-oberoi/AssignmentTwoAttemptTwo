const ping = require('./ping');
const books = require('./books');
const storeBooks = require('./storeBooks');
const likeBook = require('./likeBook');
// const books = require('./books');

module.exports = [].concat(
  ping,
  books,
  storeBooks,
  likeBook,
);
