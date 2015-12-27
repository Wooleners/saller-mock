var http = require('http'),
    httpProxy = require('http-proxy'),
    fs = require("fs");
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000); // See (†)

//
// Create your target server
//
//
fs.readFile("./index.html", function(err, html){
    http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(html);
      res.end();
    }).listen(9000);
})
