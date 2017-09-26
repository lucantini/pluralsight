'use strict';

let Task = function (name) {
    this.name = name;
    this.completed = false;

    // Prototype => an encapsulation of properties that an object links to
    // Implementing functions like this inside constructor functions is bad,
    // as all instances of this object in question would have the same implementation
    // repeating. A solution to this is using prototype
    // this.complete = function () {
    //     console.log('Completing Task: ' + this.name);
    //     this.completed = true;
    // };
    //
    // this.save = function () {
    //     console.log('Saving Task: ' + this.name);
    // };
};

// This way the functions stay in a single place,
// and when we call them they will reference the prototype
Task.prototype.complete = function () {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('Saving Task: ' + this.name);
};

module.exports = Task;