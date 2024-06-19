"use strict";
// function add(a:number, b:number):number
// function add(a:string, b:string):string
// function add(a:any, b:any):any {
//     return a + b;
// }
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add(4, 5);
const result2 = add("hello", "world");
function add2(a, b, c) {
    console.log(a, b, c);
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
const result3 = add2(7, "hello", true);
