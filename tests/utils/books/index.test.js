/**
 * @jest-environment node
 */

const { getAllBooksFromApi } = require('../../../src/utils/books');

describe('getAllBooksFromApi', () => {
  it('should fetch all books from API', async () => {
    const allBooks = await getAllBooksFromApi();
    console.log(allBooks);
    expect(Array.isArray(allBooks)).toEqual(true);
  });
});
