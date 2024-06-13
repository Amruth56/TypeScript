// @ts-ignore

function sum(a:number, b:number):number {
    return a+b;
}

let nanValue: number = NaN
console.log(nanValue)

console.log(sum(5,8))

let isDone: boolean = false

function isEven (n:number): boolean {
    if(n%2 == 0)return true;
    else return false;
}
console.log(isEven(8));