'use strict';

class Task {
	constructor(data) {
		this.name = data.name;
		this.completed = data.completed;
	}
	complete() {
		console.log('Completing Task: ' + this.name);
		this.completed = true;
	};

	save() {
		console.log('Saving Task: ' + this.name);
	};
}

module.exports = Task;