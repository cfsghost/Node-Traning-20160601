function *myGenerator() {
	console.log('Generator is running');
}

var generator = myGenerator();
generator.next();
