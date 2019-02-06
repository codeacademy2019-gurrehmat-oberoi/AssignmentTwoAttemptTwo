const models = require('../../models');

module.exports = {
  method: 'PUT',
  path: '/books/{id}/{command}',
  handler: (request) => {
    if (request.params.command === 'like') {
      return models.book.likeBookById(request.params.id);
    } if (request.params.command === 'dislike') {
      return models.book.dislikeBookById(request.params.id);
    }
    return 'invalid request';
  },
};
