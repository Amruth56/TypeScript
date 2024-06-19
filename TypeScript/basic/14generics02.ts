// function add(a:number, b:number):number
// function add(a:string, b:string):string
// function add(a:any, b:any):any {
//     return a + b;
// }

function add<t>(a:t, b:t):void{
    console.log(typeof a);
    console.log(typeof b);
}

const result1: void = add<number>(4,5);
const result2: void = add<string>("hello","world");


function add2<n,s>(a:n, b:s, c:boolean):void{
    console.log(a,b, c);
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

const result3:void = add2<number, string>(7, "hello", true)

