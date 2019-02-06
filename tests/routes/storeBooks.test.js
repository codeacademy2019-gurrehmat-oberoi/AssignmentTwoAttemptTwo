/**
 * @jest-environment node
 */

const { server } = require('../../server');
const bookMethods = require('../../src/utils/books');
const models = require('../../models');


describe('books route in POST', () => {
  beforeEach(async () => {
    await models.book.truncate();
    console.log(await models.book.count());
  });
  afterAll(async () => {
    await models.sequelize.close();
  });
  it('should add books from external API to the DB', async () => {
    const allBooks = await bookMethods.getBooksWithRating();
    console.log(allBooks.length);
    const options = {
      method: 'POST',
      url: '/books',
    };
    // const initialCount = await models.book.count();
    // console.log(initialCount, await models.book.findAll());
    // expect(initialCount).toEqual(0);
    await server.inject(options);
    const newCount = await models.book.count();
    expect(newCount).toEqual(allBooks.length);
  });
});
