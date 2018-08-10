const Sequelize = require('sequelize');

const sequelize = new Sequelize('godking', 'root', 'zhouyang1234', {
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

sequelize.authenticate()
  .then(() => {
    console.log('connection ok')
  })
  .catch((err) => {
    console.log('connection failure');
    console.log(err);
  });

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

sequelize.query('select * from users', {
  model: User
}).then(users => {
  console.log(users)
})

sequelize.query("insert into Users(UserName, Name, Email, Password) values('godking1', 'godking1', 'godking1@hotmail.com', 'king1')").then(users => {
  console.log(users)
}, err => {
  console.log(err)
})