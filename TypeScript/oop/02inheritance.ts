class Per {
    name: string = "John"
    age: number = 30
    hobbies: string[] = ['reading', 'anime', 'painting']
}

const pe : Persons = new Persons();
console.log(pe)
console.log(pe.age)




class Stu{
    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string, age:number, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies =hobbies;
    }  
}

const stu1: Stu = new Stu("vinod", 21, ['reading', 'writing']);
const stu2: Stu = new Stu("Akash", 27, ['coding', 'gym'])

console.log(stu1.name, stu2.name)
console.log(stu1)
console.log(stu2)