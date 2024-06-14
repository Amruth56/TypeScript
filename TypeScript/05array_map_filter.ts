// !Map Method
// it creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.

const arr:number[] = [1,2,3,4,5, 40];

const doubleData:number[] = arr.map((target:number) => target*2)
console.log(doubleData);


//converting number to string 
const numberToString = arr.map ( (currEle) => currEle.toString())
console.log(numberToString);


//! FILTER METHOD 
//to filter even numbers 

const evenNumbers:number[] = arr.filter ( (target:number) => target%2 == 0)
console.log(evenNumbers);