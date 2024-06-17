"use strict";
// elements in the tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary
//Function to display person information
const displayPersonInfo = (person) => {
    const [name, age, hasDriverLicense] = person;
    console.log(`name: ${name}, age: ${age}, driver License: ${hasDriverLicense ? "Yes" : "No"}`);
};
//example usage
const p1 = ["qwdqw", 34, true];
const p2 = ["bvf", 4, false];
displayPersonInfo(p1);
displayPersonInfo(p2);
