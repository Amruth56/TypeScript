class Perso {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age; // This will call the setter and assign _age
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

// Corrected the instance name to match the class name
let perso = new Perso("John", "Doe", 10);
console.log(perso.age); // Outputs: 10
console.log(perso.getFullName()); // Outputs: John Doe

//practice

class bankAccount {
  private _balance: number = 0;

  constructor(balance: number) {
    this._balance = balance;
  }

  public get balance() {
    return this._balance;
  }

  public set balance(amount: number) {
    if (amount < 0) {
      throw new Error("The amount is invalid");
    }
    this._balance = amount;
  }
}
const account = new bankAccount(0);
account.balance = 10;
console.log(account.balance);

//practice question 2
class Temperature {
  private _celsius = 0;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  public get celsius(): number {
    return this._celsius;
  }

  public set celsius(newCelsius: number) {
    this._celsius = newCelsius;
  }

  public get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  public set fahrenheit(newFahrenheit: number) {
    this._celsius = ((newFahrenheit - 32) * 5) / 9;
  }
}

const temperature: any = new Temperature(0);
temperature.celsius = 25;
console.log("\n");
console.log(temperature.fahrenheit);
