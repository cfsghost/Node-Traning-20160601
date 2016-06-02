function *myGenerator() {
	console.log('Generator is running');
	yield 'First'
	console.log('Generator is running again!');
	yield 'Second'
	console.log('Generator is running again! again!');
}

var generator = myGenerator();
var value1 = generator.next();
console.log(value1);
var value2 = generator.next();
console.log(value2);
