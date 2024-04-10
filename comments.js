var http = require('http');

// create a new class
var Comment = function() {


    // create a web server
    
    var server = http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, World!');
    });
    
    server.listen(3000, 'localhost', function() {
        console.log('Server is running at http://localhost:3000/');
    });
