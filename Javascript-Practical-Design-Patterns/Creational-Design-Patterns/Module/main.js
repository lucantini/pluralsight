'use strict';

const Task = require('./task');
const Repo = require('./taskRepository');

let task1 = new Task(Repo.get(13));
task1.save();