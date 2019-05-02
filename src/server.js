const http = require('http');
const router = require('./router');

const server = http.createServer(router);

server.listen(4000, function (requset, response) {
  console.log("Server ids listening on port 4000, Ready to accept requestes!");
});
