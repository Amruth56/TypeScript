"use strict";
class Perso {
    _age = 0;
    _firstName;
    _lastName;
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.age = age; // This will call the setter and assign _age
    }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
// Corrected the instance name to match the class name
let perso = new Perso('John', 'Doe', 10);
console.log(perso.age); // Outputs: 10
console.log(perso.getFullName()); // Outputs: John Doe
