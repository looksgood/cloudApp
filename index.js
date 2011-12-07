var http = require('http');

var port = process.env.PORT;
var host = "0.0.0.0";
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port,host);

console.log('Server running at http://127.0.0.1:1337/');