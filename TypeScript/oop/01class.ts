class Persons {
    name: string = "John"
    age: number = 30
    hobbies: string[] = ['reading', 'anime', 'painting']
}

const p : Persons = new Persons();
console.log(p)
console.log(p.age)




class Std{
    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string, age:number, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies =hobbies;
    }
}

const std1: Std = new Std("vinod", 21, ['reading', 'writing']);
const std2: Std = new Std("Akash", 27, ['coding', 'gym'])

console.log(std1.name, std2.name)
console.log(std1)
console.log(std2)