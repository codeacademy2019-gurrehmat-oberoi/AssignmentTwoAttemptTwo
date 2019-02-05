/**
 * @jest-environment node
 */

const {
  getAllBooksFromApi,
  getBookRatingById,
  getBooksWithRating,
} = require('../../../src/utils/books');

describe('getAllBooksFromApi', () => {
  it('should fetch all books from API', async () => {
    const allBooks = await getAllBooksFromApi();
    // console.log(allBooks);
    expect(Array.isArray(allBooks)).toEqual(true);
  });
});

describe('getBookRatingById', () => {
  it('should return rating object for given ID', async () => {
    const ratingObject = await getBookRatingById(10);
    console.log(ratingObject);
    expect(typeof (ratingObject.rating)).toEqual('number');
  });
});

describe('getBooksWithRating', () => {
  it('should return books with ratings added', async () => {
    const allBooks = await getBooksWithRating();
    console.log(allBooks);
    expect(typeof (allBooks[0].rating)).toEqual('number');
  });
});
