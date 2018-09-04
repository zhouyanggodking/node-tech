const router = require('./restapi-router');
const UserList = require('../services/userList');

const jwt = require('jsonwebtoken');

const SECRET_KEY = "===godking_sec==";

function makeSureUserRequiredFields(user) {
  if (!user) {
    throw new Error('User can not be null');
  }
  if (!user.userName) {
    throw new Error(400, 'User name is required');
  }
  if (!user.email) {
    throw new Error(400, 'Email is required');
  }
  if (!user.password) {
    throw new Error(400, 'password is required');
  }
}

// use userName, email and password to signup
router.post('/signup', async(ctx, next) => {
  const user = {};
  const body = ctx.request.body;
  if (body) {
    user.userName = body.userName;
    user.email = body.email;
    user.password = body.password;
  }
  try {
    makeSureUserRequiredFields(user);
  } catch (e) {
    ctx.throw(400, e);
  }

  try {
    UserList.add(user.userName, user.email, user.password);
  } catch (e) {
    ctx.throw(400, e);
  }

  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: 1
  });

  ctx.response.body = {
    isLoggedIn: true,
    token
  };
});

// user could use userName or email to login
router.post('/login', async(ctx, next) => {
  const body = ctx.request.body;
  const loginName = body.loginName;
  const password = body.password;
  let user = UserList.findByUserName(loginName);
  if (!user) {
    user = UserList.findByEmail(loginName);
  }

  if (!user) {
    ctx.throw(401, 'User doesn\'t exist');
  }

  if (user.password !== password) {
    ctx.throw(401, 'Password is not correct');
  }

  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: 1
  });

  ctx.response.body = {
    isLoggedIn: true,
    token: token
  };
});

router.get('/me', async(ctx, next) => {
  const token = ctx.request.headers.authorization;
  if (!token) {
    ctx.throw(401, 'token is missing');
  }
  
  try {
    const decodeObj = jwt.verify(token, SECRET_KEY);     
    ctx.response.body = {
      userName: decodeObj.userName,
      email: decodeObj.email
    };
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      ctx.throw(401, 'token is expired');
    }

    ctx.throw(401, 'token is malformed');
  }
});

module.exports = router