const router = require('./restapi-router');
const UserList = require('../services/userList');

const jwt = require('jsonwebtoken');

const SECRET_KEY = "===godking_sec==";

router.post('/signup', async(ctx, next) => {
  const user = {};
  const body = ctx.request.body;
  if (body) {
    user.userName = body.userName;
    user.email = body.email;
    user.password = body.password;
  }
  if (!user.userName) {
    ctx.throw(400, 'User name is required');
  }
  if (!user.email) {
    ctx.throw(400, 'Email is required');
  }
  if (!user.password) {
    ctx.throw(400, 'password is required');
  }

  try {
    UserList.add(user.userName, user.email, user.password);
  } catch(e) {
    ctx.throw(400, e);
  }

  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: 1000
  });

  ctx.response.body = {
    isLoggedIn: true,
    token
  };
});

router.post('/login', async(ctx, next) => {
  ctx.response.body = {
    isLoggedIn: true,
    token: 'sdfsd'
  }
});

module.exports = router