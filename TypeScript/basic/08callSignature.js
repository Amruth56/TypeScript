"use strict";
const student1 = {
    name: "John",
    age: 20,
    // Use 'this' to access the properties of the object within the method
    greet: function (country) {
        return `Welcome! My name is ${this.name}, I am ${this.age} years old, and I am from ${country}.`;
    }
};
// Follow camelCase naming convention for variables
let myFavNum = "5";
// The intro function can be simplified as it's similar to the greet method
const intro = (student) => {
    // Destructure the properties directly in the parameter list
    const { name, age } = student;
    // Fix the template literal and the typo in the string
    return `Welcome! My name is ${name}, and I am ${age} years old.`;
};
// Example usage:
console.log(intro(student1));
console.log(student1.greet('India'));
