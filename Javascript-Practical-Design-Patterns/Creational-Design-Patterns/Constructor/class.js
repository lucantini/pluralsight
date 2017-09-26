'use strict';

class Task {
    constructor(data) {
        this.name = data.name;
        this.completed = data.completed;
    }

    // When we use the class operator we actually do not need the
	// to implement the functions on the objects prototype,
	// we can declare them as a fucking human being
	complete () {
		console.log('Completing Task: ' + this.name);
		this.completed = true;
	};

	save () {
		console.log('Saving Task: ' + this.name);
	};
}

module.exports = Task;

// let task1 = new Task('create a demo for constructor');
// let task2 = new Task('create a demo for modules');
// let task3 = new Task('create a demo for singletons');
// let task4 = new Task('create a demo for prototype');
//
// task1.complete();
// task2.save();
// task3.save();
// task4.save();