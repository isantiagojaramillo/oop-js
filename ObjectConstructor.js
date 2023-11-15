const person = new Object();
console.log(person);

const person2 = {}
console.log(person2.constructor === Object);

const number = new Object(12);
console.log(number);

const result = new Object(12 * 12);
console.log(result);

const string = new Object("Hello World!");
string.name = "Special String";
string.test = function() {
    return this + " test";
}
console.log(string.test());
console.log(string.name);

const user = {
    name: "Ryan",
    lastName: "Ray",
    age: 24,
    showName(){
        return this.name;
    }
}

console.log(Object.keys(user));
console.log(Object.values(user));
