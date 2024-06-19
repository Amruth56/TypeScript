"use strict";
// they are commonly used when you want to represent a set of related values and choose one value from multiple options. enums provide a convenient way to define a set of named values and associate them with specific meaning. 
//when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default enum constant is 0
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "qwwdq",
    email: "wfwferw@gmail.com",
    password: "password123",
    gender: "male",
    role: Roles.admin,
};
const user2 = {
    name: "zoro",
    email: "wfwferw@gmail.com",
    password: "password123",
    gender: "female",
    role: Roles.user,
};
// Correct the function type signature and implementation
const isAdmin = (user) => {
    const { name, role } = user;
    // Return a string instead of void
    return role === Roles.admin ? `${name} is allowed` : `${name} is not allowed`;
};
// Example usage:
console.log(isAdmin(user1)); // Output: qwwdq is allowed
console.log(isAdmin(user2)); // Output: zoro is not allowed
