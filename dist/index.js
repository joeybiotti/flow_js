let name = 'John Doe';
let age = 40;
let something = [1, 2, 3];
let users = ['John', 'Bob'];
let hasDogs;

hasDogs = true;

// INTERFACES
let person;

person = {
    name: 'Bill',
    age: 50
};

//FUNCTIONS
function greeting(name) {
    return 'Hello' + name;
}

console.log(greeting('Jim'));

function someFunction(val) {
    return 'Hello';
}

someFunction('Jim');

//UTILITY TYPES

const clubs = 'Clubs';
const hearts = 'Hearts'; //will return error since not in type.