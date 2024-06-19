"use strict";
class People {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introducePeople() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(', ')}.`;
    }
}
class Studen extends People {
    grades;
    constructor(name, age, hobbies, grades) {
        super(name, age, hobbies);
        this.grades = grades;
    }
    introduce() {
        return `Hi, I'm ${this.name}, ${this.age} years old, with hobbies like ${this.hobbies.join(', ')} and a grade of ${this.grades}.`;
    }
}
// Create an instance of Student
let student = new Studen('John', 20, ['coding', 'chess'], 95);
// Now you can call the introduce method on this instance
console.log(student.introduce());
