const db = require('../middleware/dbMid');
// const User = require('../model/user');

const User = db.define('user', {
  id: {
    type: db.Sequelize.INTEGER,
    fields: 'Id', // column in DB
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

const getUserByUserName = async (userName) => {
  return db.query('SELECT * FROM Auth.Users', {
    model: User
  }).then(user => {
    // TODO: not working here
    console.log(user);
    return user;
  });
};

const getUserByEmail = (email) => {

};

module.exports = {
  getUserByUserName,
  getUserByEmail
};