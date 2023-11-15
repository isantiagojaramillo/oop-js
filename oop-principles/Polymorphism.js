function countItems(x) {
    return x.toString().length
}

console.log(countItems(10000));
console.log(countItems('Hello World'));

/////////////////////////////////////////////

function add(x=0, y=0, z=0) {
    return x + y + z;
}

console.log(add(10, 20, 30));
