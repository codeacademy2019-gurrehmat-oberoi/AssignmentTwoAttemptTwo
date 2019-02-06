const models = require('../../models');

describe('addNewBook', () => {
  beforeAll(async () => {
    await models.book.truncate();
  });
  afterEach(async () => {
    await models.book.truncate();
  });
  it('should add book to DB correctly', async () => {
    const details = {
      author: 'J K Rowling',
      id: 10,
      name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      rating: 4.45,
    };
    await models.book.addNewBook(details);
    expect(await models.book.count()).toEqual(1);
  });
  it('should not create duplicate entries', async () => {
    const details = {
      author: 'J K Rowling',
      id: 10,
      name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      rating: 4.45,
    };
    await models.book.addNewBook(details);
    await models.book.addNewBook(details);
    expect(await models.book.count()).toEqual(1);
  });
});

describe('getBookById', () => {
  beforeAll(async () => {
    await models.book.truncate();
  });
  afterEach(async () => {
    await models.book.truncate();
  });
  it('should fetch book from DB by given ID', async () => {
    const details = {
      author: 'J K Rowling',
      id: 10,
      name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      rating: 4.45,
    };
    await models.book.addNewBook(details);
    const response = await models.book.getBookById(details.id);
    // console.log(response);
    expect(response.id).toEqual(details.id);
  });
});

describe('likeBookById', () => {
  beforeAll(async () => {
    await models.book.truncate();
  });
  afterEach(async () => {
    await models.book.truncate();
  });
  it('like the book whose id is provided', async () => {
    const details = {
      author: 'J K Rowling',
      id: 10,
      name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      rating: 4.45,
    };
    await models.book.addNewBook(details);
    await models.book.likeBookById(details.id);
    const [likedBook] = await models.book.findAll({
      // attributes: ['liked'],
      where: {
        id: details.id,
      },
    });
    // console.log(likedBook);
    expect(likedBook.liked).toEqual(true);
  });
});

describe('dislikeBookById', () => {
  beforeAll(async () => {
    await models.book.truncate();
  });
  afterEach(async () => {
    await models.book.truncate();
  });
  it('dislike the book whose id is provided', async () => {
    const details = {
      author: 'J K Rowling',
      id: 10,
      name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
      rating: 4.45,
    };
    await models.book.addNewBook(details);
    await models.book.dislikeBookById(details.id);
    const [likedBook] = await models.book.findAll({
      // attributes: ['liked'],
      where: {
        id: details.id,
      },
    });
    // console.log(likedBook);
    expect(likedBook.liked).toEqual(false);
  });
});
