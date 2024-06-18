


class Stu{
    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string, age:number, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies =hobbies;
    }  

    introduce():void{
        console.log(`My name is ${this.name}. I am ${this.age} years old. I love ${this.hobbies.join( ',')}.`)
    }
}

//Inheritance 
class Chil extends Stu{
    grade:number;
    constructor(name:string, age:number, hobbies:string[],grade:number)
    {
        super(name, age,hobbies)
        this.grade = grade;
    }
    introduce():string{
        // console.log(`My name is ${this.name}. I am ${this.age} years old. I love ${this.hobbies.join( ',')} and I am in grade ${this.grade}.`)

        // or

        
        return `${super.introduce()}. I am in grade ${this.grade}`
    }
}

const stu1: Stu = new Stu("vinod", 21, ['reading', 'writing']);
const stu2: Stu = new Stu("Akash", 27, ['coding', 'gym'])
const chil1: Stu = new Chil("zoro", 27, ['playing', 'dancing'], 5)

// console.log(stu1.name, stu2.name)
// console.log(stu1)
// console.log(stu2)
// console.log(stu2.introduce());
console.log(chil1.introduce());


