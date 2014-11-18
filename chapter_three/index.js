var http = require('http');
    express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.end('Chapter Three Demo App featuring Express Module');
});

http.createServer(app).listen(3000);