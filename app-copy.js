const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');

// const controllers = require('./middleware/controllersMid');

// app.use(bodyParser());

// auto processing all controller files in constrollers folder
// app.use(controllers());

// app.listen(8000);

const SECRET_KEY = 'godking_sec_key';

// PAYLOAD
var payload = {
  data1: "Data 1",
  data2: "Data 2",
  data3: "Data 3",
  data4: "Data 4",
 };

// const token = jwt.sign(payload, SECRET_KEY, {
//   expiresIn: 1000
// });

// console.log(token);

const result = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTUzNTgwODk4MiwiZXhwIjoxNTM1ODA5OTgyfQ.gnwUe76M3a97umreCWgA2LGGQBgHbkDnsscip43uISk', SECRET_KEY)

console.log(result)
