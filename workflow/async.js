var fs = require('fs');
var async = require('async');

async.series([
	function(callback) {
		fs.readFile('./example1.txt', function(err, data) {
			console.log('Reading example1');
			callback(err);
		});
	},
	function(callback) {
		fs.readFile('./example2.txt', function(err, data) {
			console.log('Reading example2');
			callback(err);
		});
	}
], function(err, results) {
	console.log('done', err);
});
