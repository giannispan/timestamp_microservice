//Required modules
var http = require('http')
var express = require('express')

// Build the app
var app = express();

//get request
app.get('/:time', function (req, res) {

//require the url parameter
var time = req.params.time
//check if date string is valid
var d = Date.parse(time)/1000
if (d > 0) {
	var date = new Date(time).toDateString()
	res.send({unix: d, natural:date})
}
else {
var unix = new Date(time*1000).toDateString()
  res.send({unix: Math.round(time), natural:unix})
}
})

// Start server up!
http.createServer(app).listen(8080);