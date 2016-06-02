for (var index = 0; index < 10; index++) {
	(function(_index) {
		setTimeout(function() {
			console.log(_index);
		}, 1000);
	})(index)
}
