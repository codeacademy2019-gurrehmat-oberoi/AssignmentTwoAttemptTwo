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
  return Promise.all(allPromises).then(allRatings => allRatings.map((ratingObject, index) => Object.assign(allBooks[index], ratingObject)));
});
  // const allBooks = await getAllBooksFromApi();
  // // const allPromises = [];
  // const allPromises = allBooks.map((book) => {
  //   const bookRating = getBookRatingById(book.id);
  //   return bookRating;
  // });
  // const allRatings = Promise.all(allPromises).then();
  // const allBooksWithRatings =
  // allBooks.map((book, index) => Object.assign(book, allRatings[index]));
  // return allBooksWithRatings;


module.exports = {
  getAllBooksFromApi,
  getBookRatingById,
  getBooksWithRating,
};
