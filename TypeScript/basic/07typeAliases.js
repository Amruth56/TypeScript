"use strict";
/* In TypeScript, a type is a way to give a name to a specific type or combination of types. It allows you to create a custom name for qa type, making it easier to reuse and refer to the same type indifferent parts of your code */
const person1 = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
    },
};
const person2 = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
    },
};
const person3 = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
    },
};
const person4 = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
    },
};
//accessing an object data
console.log(person1.address.state);
//updating object properties
person1.address.state = "usa";
console.log(person1.address.state);
const product = {
    name: "mat",
    price: 2322,
    quantity: 3
};
const totalPrice = (product) => {
    return `${product.name} total cost ${product.price * product.quantity}`;
};
console.log(totalPrice(product));
