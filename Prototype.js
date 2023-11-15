function Person(name, lastName) {
    this.name = name,
    this.lastName = lastName,
    this.displayName = function() {
        return `${this.name} ${this.lastName}`
    }
}

const mario = new Person("Mario", "Bross");
mario.name = "mariooo"
console.log(mario.displayName());

const luigi = new Person("Luigi", "Bross");
console.log(luigi.displayName());

const maria = new Person("Maria", "Bross");
const jose = new Person("Jose", "Bross");

Person.prototype.greet = function() {
    return `Hello I am ${this.name}`;
}

console.log(mario.greet());
console.log(luigi.greet());
console.log(maria.greet());
console.log(jose.greet());

console.log("################################");

const s = new String("Hello World");

String.prototype.concatTest = function() {
    return this + " Test";
}

console.log(s.concatTest());
