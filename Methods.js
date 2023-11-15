const Car = {
    model: "Shellby Cobra",
    color: "Blue",
    creationYear: "1953",
    speed: 160,
    price: 1500000,
    // Methods
    start: function() {},
    back: function() {}
}

const Account = {
    number: "4000123456789010",
    paymentProcessor: "Visa",
    type: "Visa Gold",
    owner: "G RayMond",
    amount: 100,
    // Methods
    withdraw: function() {},
    deposit: function() {} 
}

function showFullName() {
    return "Ryan Ray"
}

const User = {
    name: "Ryan",
    lastName: "Ray",
    age: 30,
    showFullName: showFullName
}

const User2 = {
    name: "Pepito",
    lastName: "Perez",
    age: 25,
    showFullName() {
        return "Pepito Perez"
    }
}

console.log(User.showFullName());
console.log(User2.showFullName());

