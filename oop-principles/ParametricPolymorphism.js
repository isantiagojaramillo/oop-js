function Stack() {
    this.items = []

    this.push = function(item) {
        this.items.push(item);
    }
}

const stack = new Stack();
stack.push('hahahaha');

const stack2 = new Stack();
stack2.push(1000);

console.log(stack);
console.log(stack2);
