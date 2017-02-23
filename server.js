//Required modules
var http = require('http')
var express = require('express')

// Build the app
var app = express();


// Start it up!
http.createServer(app).listen(8080);