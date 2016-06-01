function timeout() {
	console.log('B');
}

// Event will be fired after 1 second.
setTimeout(timeout, 0);

console.log('A');
