var static = require('statik')
var port = (process.env.PORT || 9000)
var server = static({
  port: port,
  root: './dist'
});

server.listen();
console.log('servico rolando na porta' + port);
