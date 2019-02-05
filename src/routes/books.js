const Books = require('../utils/books');

module.exports = {
  method: 'GET',
  path: '/books',
  handler: Books.getBooksGroupedByAuthor,
};
