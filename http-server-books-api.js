var http = require('http');
var url = require('url');

var books = [
	{ id: 1, name: 'Harry Potter 1' },
	{ id: 2, name: 'Harry Potter 2' },
	{ id: 3, name: 'Harry Potter 3' },
	{ id: 4, name: 'Harry Potter 4' },
	{ id: 5, name: 'Harry Potter 5' },
	{ id: 6, name: 'Harry Potter 6' },
	{ id: 7, name: 'Harry Potter 7' }
];

var server = http.createServer(function(req, res) {
	var urlData = url.parse(req.url, true);

	if (urlData.pathname == '/apis/books') {
		res.writeHead(200, {
			'Content-Type' : 'application/json'
		});
		res.end(JSON.stringify(books));
	} else if (urlData.pathname == '/apis/book') {
		res.writeHead(200, {
		'Content-Type' : 'application/json'
		});

		var index = parseInt(urlData.query.id);
		res.end(JSON.stringify(books[index]));

	}
});

server.listen(process.env.PORT, function() {
	console.log('Server running at http://localhost:' + process.env.PORT + '/');
});
