const loginHandler = async (ctx, next) => {
  // ctx.response.body = ctx.request.body;
};

const logoutHandler = async (ctx, next) => {
  // remove token
};

const signupHandler = async (ctx, next) => {
  // added username, name, email, password into database
  const body = ctx.request.body;
  if (body.userName || body.email || body.password || body.name) {
    ctx.throw(400, 'User name or email or password or name is required');
  }
  // check unique for user name
  // check unique for email
};

module.exports = {
  'POST /login': loginHandler,
  'DELETE /logout': logoutHandler,
  'POST /signup': signupHandler
}