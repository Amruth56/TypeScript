// it allows us to create reusable components or functions that can work with multiple data types 

// function logAndReturn(value:number|string):number|string{
//     console.log(value);
//     return value
// }


// const numberResult:string|number = logAndReturn(42)
// const stringResult:string|number = logAndReturn('ytyf')
// const boolResult:string|number = logAndReturn(true)

// console.log(numberResult)
// console.log(stringResult)
// console.log(boolResult)


// Generic
function logAndReturn<Type>(value:Type):Type{
    // console.log(value);
    return value
}

const numberResult = logAndReturn<number>(42)
const stringResult = logAndReturn('ytyf')
const boolResult = logAndReturn(true)

console.log(numberResult)
console.log(stringResult)
console.log(boolResult)