const { server } = require('../../server');
const models = require('../../models');

describe('books route with PUT', () => {
  beforeEach(async () => {
    await models.book.truncate();
  });
  afterAll(async () => {
    await models.sequelize.close();
  });
  it('should set liked as true when like command is passed', async () => {
    const options = {
      method: 'PUT',
      url: '/books/10/like',
    };
    await models.book.addNewBook({
      author: 'J K Rowling',
      id: 10,
      name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      rating: 4.45,
    });
    await server.inject(options);
    const updatedRow = await models.book.getBookById(10);
    console.log(updatedRow);
    expect(updatedRow.liked).toEqual(true);
  });
  it('should set liked as false when dislike command is passed', async () => {
    const options = {
      method: 'PUT',
      url: '/books/10/dislike',
    };
    await models.book.addNewBook({
      author: 'J K Rowling',
      id: 10,
      name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      rating: 4.45,
    });
    await server.inject(options);
    const updatedRow = await models.book.getBookById(10);
    console.log(updatedRow);
    expect(updatedRow.liked).toEqual(false);
  });
});

// it('should set liked as false when dislike command is passed', async () => {
//   const options = {
//     method: 'PUT',
//     url: '/books/10/dislike',
//   };
//   await models.book.addNewBook({
//     author: 'J K Rowling',
//     id: 10,
//     name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
//     rating: 4.45,
//   });
//   await server.inject(options);
//   const updatedRow = await models.book.getBookById(10);
//   console.log(updatedRow);
//   expect(updatedRow.liked).toEqual(false);
// });
