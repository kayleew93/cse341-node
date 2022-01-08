const http = require('http');

const routes = require('./routes2');

const server = http.createServer(routes.handler);

server.listen(3000);