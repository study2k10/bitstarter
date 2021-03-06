#!/usr/bin/env node
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

helloWorld = function() {
  var bufIndex = new Buffer(fs.readFileSync('index.html'), 'utf-8');
  console.log(bufIndex.toString());
  return bufIndex.toString();
}

app.get('/', function(request, response) {
  response.send(helloWorld());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
  helloWorld();
});
