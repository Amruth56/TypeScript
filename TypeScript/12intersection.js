"use strict";
// in Intersection we should include the properties of both the type Aliases
const e = {
    name: "John",
    age: 21,
    emp_id: 123,
    department: "Department"
};
// in Union we should the complete properties of at least 1 type Aliases
const e2 = {
    name: "John",
    age: 21,
    department: "Department"
};
const myPersonalInfo = {
    name: "John",
    age: 21,
};
const user = {
    name: "John",
    age: 21,
};
const myLocation = {
    city: "Bengaluru",
    country: "India"
};
const createUserProfile = (user, location) => {
    return `Hello ${user.name} from ${location.city} ${location.country}!`;
};
console.log(createUserProfile(user, myLocation));
