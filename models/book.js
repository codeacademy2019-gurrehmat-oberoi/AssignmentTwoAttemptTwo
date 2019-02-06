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
  }, {});
  // book.associate = function (models) {
  //   // associations can be defined here
  // };

  Book.addNewBook = bookDetails => Book.findOrCreate({ where: bookDetails });

  Book.getBookById = id => Book.findOne({ where: { id } });

  return Book;
};
