const Sequelize = require('sequelize');

const sequelize = new Sequelize('Auth', 'root', 'zhouyang1234', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire:30000,
    idle: 1000
  }
});

module.exports = sequelize;