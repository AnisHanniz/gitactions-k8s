console.log("Hello World"); 
const http = require("http"); 
http.createServer((req, res) => { 
  res.writeHead(200); 
  res.end("Hello World!"); 
}).listen(80);
