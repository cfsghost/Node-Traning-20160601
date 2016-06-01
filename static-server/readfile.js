var fs = require('fs');

fs.readFile('./check-file.js', function(err, content) {
	if (err) {
		console.log('Failed to read');
		return;
	}
	console.log(content.toString());
});
