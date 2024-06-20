"use strict";
// we use types when we need union,  intersection, or mapped types.
// we use interface when defining objects shapes or classes that adhere to b contract.
// interfaces can extend other interfaces to inherit their members
// interfaces can also be used to define function types
// custom types can use unions and intersections for more complex type composition.
;
;
const bioData = {
    name: "John Doe",
    age: 36,
};
console.log(bioData);
console.log(bioData.age);
const bioData1 = {
    name: "John Doe",
    age: 36,
    city: "Washington",
};
const bioData2 = {
    name: "John Doe",
    age: 36,
    city: "Washington",
    state: "Washington"
};
console.log(bioData1);
console.log(bioData2);
