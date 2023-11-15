const User2 = {
    name: "Chanchito",
    lastName: "Happy",
    age: 5,
    showFullName() {
        return this.name + " " + this.lastName;
    }
}

console.log(User2.showFullName());


const Account = {
    number: "4000123456789010",
    paymentProcessor: "Visa",
    type: "Visa Gold",
    owner: "G RayMond",
    amount: 100, 
    withdraw(quantity){
        this.amount = this.amount - quantity;
    },
    deposit(quantity) {
        this.amount = this.amount + quantity;
    } 
}

Account.deposit(100);
Account.deposit(500);
Account.deposit(10);

console.log(Account);

Account.withdraw(10);
Account.withdraw(200);

console.log(Account);
