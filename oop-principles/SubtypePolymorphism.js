class Person {
    constructor(name, lastName){
        this.name = name,
        this.lastName = lastName
    }
}

class Programmer extends Person{
    constructor(name, lastName, language){
        super(name, lastName);
        this.language = language
    }
}

const john = new Person ('john', 'ray');
const ryan = new Programmer ('ryan', 'rogers', 'JavaScript');

console.log(john);
console.log(ryan);

function showFullName(p) {
    console.log(p.name + " " + p.lastName);
}

showFullName(john);
showFullName(ryan);
