function *myGenerator() {
	console.log('Generator is running');
	yield
	console.log('Generator is running again!');
	yield
	console.log('Generator is running again! again!');
}
var generator = myGenerator();
generator.next();
console.log('outside');
generator.next();
console.log('outside');
generator.next();
