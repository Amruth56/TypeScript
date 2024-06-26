"use strict";
// !Map Method
// it creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.
const arr = [1, 2, 3, 4, 5, 40];
const doubleData = arr.map((target) => target * 2);
console.log(doubleData);
//converting number to string 
const numberToString = arr.map((currEle) => currEle.toString());
console.log(numberToString);
//! FILTER METHOD 
//to filter even numbers 
const evenNumbers = arr.filter((target) => target % 2 == 0);
console.log(evenNumbers);
// to filter number greater than 4
const greater = arr.filter((target) => target > 4);
console.log(greater);
