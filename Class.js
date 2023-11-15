// function Person() {
//     this.name = '',
//     this.lastName = ''
// }

// IT IS THE SAME AS THE ABOVE. JUST IN A DIFFERENT TYPING
class Person {
    constructor(name, lastName){
        this.name = name,
        this.lastName = lastName
    }

    greet(){
        return `Hello this is ${this.name}!`;
    }
}

const user = new Person('Joe', 'Ray');
const user2 = new Person('Ryan', 'Ray');

console.log(user.greet());
console.log(user2.greet());
