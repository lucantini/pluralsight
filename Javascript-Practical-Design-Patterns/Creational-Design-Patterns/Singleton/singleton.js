'use strict';

const TaskRepo = (function () {
	let taskRepo;
	function createRepo() {
		return new Object('Task');
	}
	return {
		getInstance: function () {
			if (!taskRepo) {
				taskRepo = createRepo();
			}
			return taskRepo;
		}
	}
})();

const repo1 = TaskRepo.getInstance();
const repo2 = TaskRepo.getInstance();

console.log(repo1 === repo2);