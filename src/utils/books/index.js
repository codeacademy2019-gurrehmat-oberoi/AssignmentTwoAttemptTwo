const { httpGet } = require('../http');

const getAllBooksFromApi = () => httpGet('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks').then(response => response.data.books);

module.exports = {
  getAllBooksFromApi,
};
