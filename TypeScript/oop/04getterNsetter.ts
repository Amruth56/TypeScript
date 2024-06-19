class Perso {
    private _age: number =0;
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.age = age; // This will call the setter and assign _age
    }
 
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

// Corrected the instance name to match the class name
let perso = new Perso('John', 'Doe', 10);
console.log(perso.age); // Outputs: 10
console.log(perso.getFullName()); // Outputs: John Doe
