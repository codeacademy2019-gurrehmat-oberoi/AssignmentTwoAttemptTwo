// 'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    author: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    liked: DataTypes.BOOLEAN,
  }, {});
  // book.associate = function (models) {
  //   // associations can be defined here
  // };

  Book.addNewBook = bookDetails => Book.findOrCreate({ where: bookDetails });

  Book.getBookById = id => Book.findOne({ where: { id } });

  Book.likeBookById = id => Book.update({ liked: true }, { where: { id } });

  Book.dislikeBookById = id => Book.update({ liked: false }, { where: { id } });

  return Book;
};
