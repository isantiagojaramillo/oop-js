const company = {
    name: "stark industries",
    empleyees: []
}

class Person {
    constructor(name, lastName){
        this.name = name,
        this.lastName = lastName
    }
}

const john = new Person('john', 'ray');
const maria = new Person('maria', 'perez');

company.empleyees.push(john);
company.empleyees.push(maria);

console.log(maria);
console.log(john);

console.log(company);
