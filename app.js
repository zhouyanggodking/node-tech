const Koa = require('koa');
const app = new Koa();
const router = require('./router/restapi-router');
const bodyParser = require('koa-bodyparser');

// all router share the same router instance - restapi-router
require('./router/auth');

router.prefix('/api');

app.use(bodyParser());
app.use(router.routes());

app.listen(8000);
console.log('listening at port 8000');
