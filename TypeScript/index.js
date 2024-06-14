"use strict";
// @ts-ignore
function sum(a, b) {
    return a + b;
}
let nanValue = NaN;
console.log(nanValue);
console.log(sum(5, 8));
let isDone = false;
function isEven(n) {
    if (n % 2 === 0)
        return true;
    else
        return false;
}
console.log(isEven(8));
let bigNumber = 90071254740992n;
console.log(bigNumber);
// unknown variable
let num2;
num2 = 5;
num2 = "five";
num2 = true;
;
if (typeof num2 === 'number') {
    console.log(`type of ${num2} is number`);
}
else if (typeof num2 === 'boolean') {
    console.log(`type of ${num2} is boolean`);
}
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
async function processData() {
    const response = await fetchData();
    if (typeof response === 'object') {
        console.log(123456789);
    }
}
