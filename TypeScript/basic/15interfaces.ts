//  in typescript, an interface is a powerful feature that allows you to define a contract for an objects shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any javascript code at runtime.

interface Greet {
    name:string;
    age:number;
}
const greets:Greet = {
    name:'Binod',
    age: 21,

}

const userInfo= (g:Greet) => {
    const {name, age} = g;
    return {name, age};
}

console.log(userInfo(greets))