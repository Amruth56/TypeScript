class People {
    constructor(
        public name: string,
        public age: number,
        protected hobbies: string[]
    ) {}

    introducePeople(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(', ')}.`
    }
}

class Studen extends People {
    public grades: number;

    constructor(name: string, age: number, hobbies: string[], grades: number) {
        super(name, age, hobbies);
        this.grades = grades;
    }

    introduce(): string {
        return `Hi, I'm ${this.name}, ${this.age} years old, with hobbies like ${this.hobbies.join(', ')} and a grade of ${this.grades}.`;
    }
}
// Create an instance of Student
let student = new Studen('John', 20, ['coding', 'chess'], 95);

// Now you can call the introduce method on this instance
console.log(student.introduce());