const fs = require('fs');
const path = require('path');
function addControlllers(router, dir = 'controllers') {
  const baseDir = path.resolve('.');
  const files = fs.readdirSync(`${baseDir}/${dir}`);
  const controllers = files.filter(file => file.endsWith('Controller.js'));
  for (let controller of controllers) {
    console.log(`processing controller: ${controller}`);
    let mapping = require(`${baseDir}/controllers/${controller}`);
    // currently just handle GET and POST
    processRouting(router, mapping);
  }
}

function processRouting(router, mapping) {
  Object.keys(mapping).forEach(url => {
    if (url.startsWith('GET ')) {
      const path = url.substring(4);
      router.get(path, mapping[url]);
    }
    else if (url.startsWith('POST ')) {
      const path = url.substring(5);
      router.post(path, mapping[url]);
    }
    else {
      console.log('only support GET and POST requests');
    }
  });
}

const init = (controllerDir) => {
  const router = require('koa-router')();
  addControlllers(router, controllerDir);
  // console.log(router.routes());
  return router.routes();
}

module.exports = init;