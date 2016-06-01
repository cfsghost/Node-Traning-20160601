function timeout() {
	console.log('B');
}

// Event will be fired after 1 second.
setTimeout(timeout, 1000);

while(true) {}
console.log('A');
