var co = require('co');
co(function *() {

	console.log('1');
	yield function(done) {
		setTimeout(function() {
			console.log('Deley');
			done();
		}, 1000);
	}

	console.log('done');
});

console.log('outside');
