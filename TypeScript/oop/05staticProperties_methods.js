"use strict";
class mathOperation {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 + -num2;
    }
}
console.log(mathOperation.PI);
console.log(mathOperation.add(5, 13));
console.log(mathOperation.sub(7, 98));
