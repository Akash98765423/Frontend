var name = "Ravi";
var age = 25;

var student = {
    name: name,
    age: age
};

var greet = function(name) {
    return "Hello " + name;
};

console.log(greet(name));

const name1 = "Ravi";
const age1 = 25;

const student1 = {
    name,
    age
};

const greet1 = (name) => {
    return `Hello ${name}`;
};

console.log(greet(name));