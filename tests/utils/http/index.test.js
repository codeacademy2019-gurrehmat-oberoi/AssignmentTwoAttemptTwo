const { httpGet } = require('../../../src/utils/http');

describe('httpGet', () => {
  it('should return promise', () => {
    const returnedValue = httpGet('www.youtube.com');
    console.log(returnedValue);
    expect(typeof (returnedValue.then)).toEqual('function');
  });
});
