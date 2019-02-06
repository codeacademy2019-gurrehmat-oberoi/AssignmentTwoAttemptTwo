const models = require('../../models');
const bookMethods = require('../../src/utils/books');

module.exports = {
  method: 'POST',
  path: '/books',
  handler: async () => {
    const booksWithRating = await bookMethods.getBooksWithRating();
    const allPromises = booksWithRating.map(book => models.book.addNewBook({
      author: book.Author,
      id: book.id,
      rating: book.rating,
      name: book.Name,
    }));
    return Promise.all(allPromises).then(() => 'All books added successfully');
  },
};
