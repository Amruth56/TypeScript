// declaration or definition of a function, which includes the function's name, parameters and return type. It defines the structure and type information of a function without including the function's implementation or body.

type Student = {
  name: string;
  age: number;
  gender?: string;
};

const student1: Student = {
  name: "John",
  age: 20,
};

let myFAvNum = "5";

const intro = (student1: Student): string => {
  const { name, age } = student1;

  return `welcome my name is ${name}, I ma ${age} yrs old`;
};
console.log(intro(student1));
