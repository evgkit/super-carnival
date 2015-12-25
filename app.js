var router = require("./router.js");

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000, 'localhost');

console.log('Server running');






