// we use types when we need union,  intersection, or mapped types.
// we use interface when defining objects shapes or classes that adhere to b contract.
// interfaces can extend other interfaces to inherit their members
// interfaces can also be used to define function types
// custom types can use unions and intersections for more complex type composition.



// TYPE
/*
type Stud = {
  name: string;
  age: number;
};

type StudAddr = {
  city: string;
  state: string;
};

const bioData: Stud = {
  name: "John Doe",
  age: 36,
};
console.log(bioData);
console.log(bioData.age);


type bioDataInter = Stud | StudAddr
const bioData2: Stud & StudAddr = {
    name: "John Doe",
    age: 36,
    city: "Washington",
    state: "Washington"
}
const bioData2: bioDataInter = {
    name: "John Doe",
    age: 36,
    city: "Washington",
}
console.log(bioData2);

*/


// INTERFACE

interface Stud  {
  name: string;
  age: number;
};

interface StudAddr  {
  city: string;
  state: string;
};

const bioData: Stud = {
  name: "John Doe",
  age: 36,
};
console.log(bioData);
console.log(bioData.age);



interface bioDataInter extends Stud, StudAddr{}
const bioData1: Stud | StudAddr = {
    name: "John Doe",
    age: 36,
    city: "Washington",
}
const bioData2: bioDataInter = {
    name: "John Doe",
    age: 36,
    city: "Washington",
    state: "Washington"

}
console.log(bioData1);

console.log(bioData2);
