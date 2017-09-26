const repo = require('./Repo');

const taskHandler = function () {
	return {
		save: function () {
			repo.save('Hi from taskHandler');
		}
	}
};

module.exports = taskHandler();