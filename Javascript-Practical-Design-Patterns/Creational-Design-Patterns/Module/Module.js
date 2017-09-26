'use strict';
// A simple way to encapsulate methods
// Creates a "toolbox" of functions to use

// Is usually just an Object literal
let Module = {
	method: function () { console.log('method') },
	nextMethod: function () { console.log('nextMethod') },
};

// You can also wrap it on a function, doing so cause you to be able
// to create private variables inside the function. Like so:
let Module = function() {
	let privateVar = 'I am private....';
	return {
		method: function() { console.log('method') },
		nextMethod: function() { console.log('nextMethod') },
	};
};