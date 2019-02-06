

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('books', {
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: Sequelize.INTEGER,
    // },
    author: {
      type: Sequelize.STRING,
    },
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.FLOAT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('books'),
};
