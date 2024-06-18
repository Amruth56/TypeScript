"use strict";
class Persons {
    name = "John";
    age = 30;
    hobbies = ['reading', 'anime', 'painting'];
}
const p = new Persons();
console.log(p);
console.log(p.age);



class Std {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const std1 = new Std("vinod", 21, ['reading', 'writing']);
const std2 = new Std("Akash", 27, ['coding', 'gym']);
console.log(std1.name, std2.name);
console.log(std1);
console.log(std2);
