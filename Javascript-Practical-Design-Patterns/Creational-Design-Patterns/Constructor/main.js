'use strict';

const Task = require('./class');

let task1 = new Task({ name: 'create a demo for constructor', completed: false });
let task2 = new Task({ name: 'create a demo for modules', completed: false });

task1.complete();
task2.save();
