'use strict';

// Responsible for the database or service calls

let repo = function () {
	let db = {};
	const get = (id) => {
		console.log('Getting task: ' + id);
		return {
			name: 'new task from db',
		}
	};
	const save = (task) => {
		console.log('Saving ' + task.name);
	};
	return {
		get: get,
		save: save,
	}
};

module.exports = repo();