// Use to create new objects with their own object scope

function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function () {
        return this.param1 + ' ' + this.param2;
    }
}

// in ES6
// class Task {
// 	constructor(data) {
// 		this.name = data.name;
// 		this.completed = data.completed;
// 	}
//
// 	// When we use the class operator we actually do not need the
// 	// to implement the functions on the objects prototype,
// 	// we can declare them as a fucking human being
// 	complete () {
// 		console.log('Completing Task: ' + this.name);
// 		this.completed = true;
// 	};
//
// 	save () {
// 		console.log('Saving Task: ' + this.name);
// 	};
// }