var async = require('async');
var fs = require('fs');
var files = [
'./example1.txt',
'./example2.txt',
'./example3.txt'
];
async.eachSeries(files, function(file, callback) {
	fs.readFile(file, function(err, data) {
		callback(err);
	});
}, function(err) {
	console.log('done');
});
