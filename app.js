const hostname="127.0.0.1";
const port=80
const fs=require("fs");
const http=require('http');
http.createServer(function (req, res){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(80);
