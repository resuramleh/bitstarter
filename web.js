var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());

var buff = new BUFFER(fs.readFileSync('index.html'));
var content = buff.toString('utf-8')

app.get('/', function(request, response) {
    response.send(content);
});

app.listen(port, function() {
    console.log("Listening on " + port);
});
