const user1 = {
    name: "Chanchito",
    lastName: "Happy",
    age: 5,
    showFullName() {
        return `${this.name} ${this.lastName}`
    }
}

console.log(user1.showFullName());

// CONSTRUCTOR
function Person() {
    this.name = "",
    this.lastName = "",
    this.age = 0,
    this.showFullName = function() {
        return `${this.name} ${this.lastName}`;
    }
} 

const user2 = new Person();
user2.name = "Pepita"
user2.lastName = "Perez"
user2.age = 35
console.log(user2.showFullName());

const user3 = new Person();
user3.name = "Pepa"
user3.lastName = "Pig"
user3.age = 5
console.log(user3.showFullName());

const user4 = new Person();
const user5 = new Person();

console.log(user3);
console.log(user4);
console.log(user5);
