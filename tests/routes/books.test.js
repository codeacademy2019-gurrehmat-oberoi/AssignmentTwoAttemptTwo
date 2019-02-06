/**
 * @jest-environment node
 */

const { server } = require('../../server');

describe('books route', () => {
  it('should return all books grouped by author', async () => {
    const options = {
      method: 'GET',
      url: '/books',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(Object.keys(response.result).length).toEqual(2);
  });
});
