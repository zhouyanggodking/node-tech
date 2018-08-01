const indexHandler = async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
}

module.exports = {
  'GET /': indexHandler
}