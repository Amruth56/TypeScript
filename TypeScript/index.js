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
    if (n % 2 == 0)
        return true;
    else
        return false;
}
console.log(isEven(8));
