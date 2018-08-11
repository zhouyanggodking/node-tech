const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const controllers = require('./middleware/controllersMid');

app.use(bodyParser());

// auto processing all controller files in constrollers folder
app.use(controllers());

app.listen(8000);

console.log('listening at port 8000')
