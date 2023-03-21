var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (filename === "./") {
        fs.readFile("index.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      } else if (!err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      } else {
        fs.readFile("404.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      }
    });
  })
  .listen(8080);
