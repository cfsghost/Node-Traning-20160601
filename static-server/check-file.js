var fs = require('fs');

fs.exists('/etc/passwd', function(exists) {
	if (exists)
		console.log('passwd exists!');
	else
		console.log('passwd doesn\'t exist!');
});
