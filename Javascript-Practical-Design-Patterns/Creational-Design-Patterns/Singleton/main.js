'use strict';

const taskHandler = require('./taskHandler');
const repo = require('./Repo');

repo.save('fromMain');
repo.save('fromMain');
repo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();