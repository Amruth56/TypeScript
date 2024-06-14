// @ts-ignore

function sum(a: number, b: number): number {
  return a + b;
}

let nanValue: number = NaN;
console.log(nanValue);

console.log(sum(5, 8));
 
let isDone: boolean = false;

function isEven(n: number): boolean {
  if (n % 2 === 0) return true;
  else return false;
}
console.log(isEven(8));

let bigNumber:bigint = 90071254740992n;
console.log(bigNumber);
 

// unknown variable
let num2:unknown 

num2 = 5;
num2 = "five"
num2 = true;;


if(typeof num2 === 'number'){
    console.log(`type of ${num2} is number`)
}else if (typeof num2 === 'boolean'){
    console.log(`type of ${num2} is boolean`)
}


async function fetchData(): Promise<unknown>{
    const response = await fetch ('https://api.example.com/data');
    const data = await response.json();
    return data;
}
async function processData(){
    const response = await fetchData();
    if(typeof response === 'object'){
        console.log(123456789)
    }
}