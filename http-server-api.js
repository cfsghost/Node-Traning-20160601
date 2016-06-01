var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var urlData = url.parse(req.url, true);

	if (urlData.pathname == '/say') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end(urlData.query.name + ': ' + urlData.query.message);
	}
});

server.listen(process.env.PORT, function() {
	console.log('Server running at http://localhost:' + process.env.PORT + '/');
});
