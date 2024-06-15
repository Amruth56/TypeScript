"use strict";
// declaration or definition of a function, which includes the function's name, parameters and return type. It defines the structure and type information of a function without including the function's implementation or body.
const student1 = {
    name: "John",
    age: 20,
};
let myFAvNum = "5";
const intro = (student1) => {
    const { name, age } = student1;
    return `welcome my name is ${name}, I ma ${age} yrs old`;
};
console.log(intro(student1));
