var events = require('events');
var util = require('util');

var MyObject = function() {
 this.count = 0;
};

util.inherits(MyObject, events.EventEmitter);

MyObject.prototype.touch = function() {
	this.count++;
	this.emit('touched', this.count);
};

// --- Usage
var myObj = new MyObject();

myObj.on('touched', function(count) {
 console.log('Object was touched already. ' + count);
});

setTimeout(function() {
	myObj.touch();
}, 1000);

setTimeout(function() {
	myObj.touch();
}, 5000);
myObj.touch();
myObj.touch();


