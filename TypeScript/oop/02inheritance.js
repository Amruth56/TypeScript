"use strict";
class Per {
    name = "John";
    age = 30;
    hobbies = ['reading', 'anime', 'painting'];
}
const pe = new Persons();
console.log(pe);
console.log(pe.age);
class Stu {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const stu1 = new Stu("vinod", 21, ['reading', 'writing']);
const stu2 = new Stu("Akash", 27, ['coding', 'gym']);
console.log(stu1.name, stu2.name);
console.log(stu1);
console.log(stu2);
