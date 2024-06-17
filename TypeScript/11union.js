"use strict";
// when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties, Failure to do so will result in a type error during compilation.
const userInput = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    else {
        throw new Error("Invalid input data");
    }
};
console.log(userInput("hello"));
console.log(userInput(10));
// homework
/* we want ot create a function that formats the value passed to it in a specific way based on its type:
-> if the input is a number, it should add a dollar sign and format it with two decimal places.
-> if the input is a boolean, it should return "yes" for true and "No" for false
->if the input is a string, it should capitalize the first letter.*/
function format(v) {
    if (typeof v === "number") {
        return `$${v.toFixed(2)}`;
    }
    else if (typeof v === "boolean") {
        return v ? "Yes" : "No";
    }
    else if (typeof v === "string") {
        return v.charAt(0).toUpperCase() + v.slice(1);
    }
    else {
        throw new Error("Invalid value");
    }
}
console.log(format(123.42));
console.log(format("hello"));
console.log(format(true));
