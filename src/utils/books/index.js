const { httpGet } = require('../http');

const getAllBooksFromApi = () => {
  const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return httpGet(url).then(response => response.data.books);
};

const getBookRatingById = (id) => {
  const url = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
  return httpGet(url).then(response => response.data);
};

const getBooksWithRating = () => getAllBooksFromApi().then((books) => {
  const allBooks = books;
  const allBookIds = allBooks.map(book => book.id);
  const allPromises = allBookIds.map(id => getBookRatingById(id));
  return Promise.all(allPromises)
    .then(allRatings => allRatings
      .map((ratingObject, index) => Object.assign(allBooks[index], ratingObject)));
});

const getBooksGroupedByAuthor = () => getBooksWithRating()
  .then(allBooks => allBooks.reduce((accumulator, book) => {
    if (accumulator[book.Author] === undefined) {
      accumulator[book.Author] = [book];
    } else {
      accumulator[book.Author].push(book);
    }
    return accumulator;
  }, {}));

module.exports = {
  getAllBooksFromApi,
  getBookRatingById,
  getBooksWithRating,
  getBooksGroupedByAuthor,
};
