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
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  deletedAt: false
})

User.findAll().then(users =>{
  console.log(users)
})