"use strict";
class Stu {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old. I love ${this.hobbies.join(',')}.`);
    }
}
//Inheritance 
class Chil extends Stu {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old. I love ${this.hobbies.join(',')} and I am in grade ${this.grade}.`);
    }
}
const stu1 = new Stu("vinod", 21, ['reading', 'writing']);
const stu2 = new Stu("Akash", 27, ['coding', 'gym']);
const chil1 = new Chil("zoro", 27, ['playing', 'dancing'], 5);
// console.log(stu1.name, stu2.name);
// console.log(stu1);
// console.log(stu2);
// console.log(stu2.introduce());
console.log(chil1.introduce());
