class Person {
    constructor(name, lastName){
        this.name = name,
        this.lastName = lastName
    }
}

// Association means that these two objects could be related.
const john = new Person('john', 'ray');
const maria = new Person('maria', 'perez');

// REALTION. WITHOUT THIS RELATION THIS CAN WORK WITH NO PROBLEM
maria.parent = john;

console.log(maria);
console.log(john);
