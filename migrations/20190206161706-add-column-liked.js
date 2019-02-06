

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('books', 'liked', Sequelize.BOOLEAN),


  down: (queryInterface, Sequelize) => queryInterface.removeColumn('books', 'liked')
  ,
};
