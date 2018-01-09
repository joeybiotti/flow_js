// @flow

// VARS
let name : string = 'John Doe';
let age : number = 40;
let something : any = [1,2,3];
let users : string[] = ['John', 'Bob'];
let hasDogs: boolean;

hasDogs = true;

// INTERFACES
let person: Person;

person = {
    name: 'Bill',
    age: 50,
}

interface Person {
    name: string;
    age: number;
    hasDogs?: boolean;
}

//FUNCTIONS
function greeting(name:string): string{
    return 'Hello' + name;
}

console.log(greeting('Jim'));

function someFunction(val: string | number){
    return 'Hello';
}

someFunction('Jim');

//UTILITY TYPES

type Suit = 'Diamonds' | 'Clubs' | 'Spades';

const clubs: Suit = 'Clubs';
const hearts: Suit = 'Hearts'; //will return error since not in type.