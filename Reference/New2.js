var x, y, x;
var exportedName = {x: x, y: y};
arr = [23, 'asqwe']
let [a, b, c] = arr;
console.log(a, b, c)

function render({name, age}) {
    let x = name;
    let y = age;
    return x + y;
}

let asx = {name: 34, age: 12}
console.log(render(asx))
let name = 'lyy'
let age = 23
for (i of name) {
    console.log(i)
}
age = null
let asdqwe = age ?? name
console.log(asdqwe)
let str =
    `Hi ${name} your age is ${age}`;
console.log(str)
module.exports = str;
