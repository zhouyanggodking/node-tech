const db = require('../middleware/dbMid');

const User = db.define('user', {
  id: {
    type: db.Sequelize.STRING,
    field: 'Id', // column in DB
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userName: {
    type: db.Sequelize.STRING,
    field: 'UserName',
    allowNull: false,
    unique: true
  },
  name: {
    type: db.Sequelize.Sequelize.STRING,
    field: 'Name',
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    field: 'Email',
    allowNull: false,
    unique: true
  },
  password: {
    type: db.Sequelize.STRING,
    field: 'Password',
    allowNull: false,
    unique: false
  }
});

module.exports = User;