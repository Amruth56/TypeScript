const array: number[] = [1, 2, 3, 4, 5];

const arr2: number[] = new Array(1, 3, 5, 7, 9);

const arr3: string[] = Array.of("qwe", "rty", "mno", "xyz");

console.log(array);
console.log(arr2);
console.log(arr3);

let fruits: string[] = ["apple", "banana", "orange", "mango"];
let newFruits = fruits.push("kiwi");
console.log(fruits);
console.log(newFruits);


fruits.forEach((name:string) => console.log(name))