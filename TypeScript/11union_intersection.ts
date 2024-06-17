// when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties, Failure to do so will result in a type error during compilation.




const userInput = (value : string | number ) : string | number => {
    if(typeof value === 'string'){
        return value.toUpperCase()
    } else if(typeof value === 'number'){
        return value*2;
    }else {
        throw new Error('Invalid input data')
    }
}

console.log(userInput( 'hello'));
console.log(userInput( 10));