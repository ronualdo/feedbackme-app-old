var static = require('statik')
var server = static({
  port: 3000,
  root: './dist'
});

server.listen();
console.log('foi');
