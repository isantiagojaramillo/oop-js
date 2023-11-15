// function Person() {
//     this.name = '',
//     this.lastName = ''
// }

// function Programmer() {
//     this.language = ''
// }

// Programmer.prototype = new Person();

// console.log(Programmer);
// console.log(Person);

// const person = new Person();
// person.name = 'Cindy';
// person.lastName = 'Craford';
// console.log(person);

// const programmer = new Programmer();
// programmer.name = "Elliot";
// programmer.lastName = "Mr. Robot";
// programmer.language = "JavaScript";

// console.log(programmer);

////////////////////////////////////////////////////////////

class Person {
    constructor(name, lastName){
        this.name = name,
        this.lastName = lastName,
        this.age = null
    }
}

class Programmer extends Person {
    constructor(name, lastName, language){
        super(name, lastName);
        this.language = language
    }
}

const person = new Person('Cindy', 'Craford');

console.log(person);

const programmer = new Programmer('Elliot', 'Mr. Robot', 'JavaScript')

console.log(programmer);
