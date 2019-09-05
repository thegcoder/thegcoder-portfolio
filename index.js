const StaticServer = require('static-server');
const server = new StaticServer({
  rootPath: './public',
  port: process.env.PORT || 5000
});

server.start(function () {
  console.log('Server listening to', server.port);
});
