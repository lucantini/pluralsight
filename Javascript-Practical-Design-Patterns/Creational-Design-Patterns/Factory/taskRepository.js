'use strict';
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
	console.log('Setting up new taskRepo');
	return {
		get: get,
		save: save,
	}
};

module.exports = repo();