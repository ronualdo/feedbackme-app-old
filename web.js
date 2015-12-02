var static = require('statik')
var server = static({
  port: process.env.PORT,
  root: './dist'
});

server.listen();
console.log('foi');
