var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var urlData = url.parse(req.url, true);
	console.log(urlData);
});

server.listen(process.env.PORT, function() {
	console.log('Server running at http://localhost:' + process.env.PORT + '/');
});
