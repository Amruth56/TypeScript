// objects 
let person = {
    name: "John",
    age: 22,
    occupation: "Developer",
    greet: () => {
        console.log(`Hello, my name is ${person.name}, my age is ${person.age} and i am a ${person.occupation}`);  
    }
}

person.greet();


// class
class car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(){
        console.log(`The car is a ${this.year} ${this.brand} ${this.model}`)
    }
}

const fortuner = new car('Toyota', "Fortuner", 2024)

fortuner.displayInfo();
