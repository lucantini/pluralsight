// Define Property
var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
   value: function () {
       return this.title + ' ' + this.description;
   },
    writable: false,
    enumerable: false,
    configurable: true
});

// With writable set to false we cannot change the value of toString
// This prevents the most annoying thing in JS which is the fact that EVERYTHING is assignable

// With enumerable set to false the toString property does not appear in loops and JSONs

task.toString = 'hi';

console.log(Object.keys(task));

// Inheritance
var urgentTask = Object.create(task);

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: true
});

// As this is a NEW object, even if it inherits from 'task'
// we can still change the toString property
// Even with it's writable set to false.

console.log(urgentTask.toString());