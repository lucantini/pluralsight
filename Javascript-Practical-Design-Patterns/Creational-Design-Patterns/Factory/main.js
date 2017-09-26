'use strict';

const Task = require('./task');
const repoFactory = require('./repoFactory');

const task1 = new Task(repoFactory.task.get(1));
const task2 = new Task(repoFactory.task.get(2));

// const user = repoFactory.getRepo('user').get(1);
// const project = repoFactory.getRepo('project').get(1);
//
// task1.user = user;
// task2.project = project;

task1.save();