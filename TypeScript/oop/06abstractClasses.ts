//class in terms of OOP is a blueprint for creating objects 

// abstract classes focus on class inheritance and sharing common functionality 
abstract class PerObj {
    abstract name: string;
    abstract roll: number;
}

// This will not work as you cannot instantiate an abstract class:
// const perObj1 = new PerObj();

// Instead, you should extend the abstract class like this:
class ConcretePerObj extends PerObj {
    constructor(public name: string, public roll: number) {
        super();
    }
}

const perObj1 = new ConcretePerObj("perObj1", 1);
const perObj2 = new ConcretePerObj("perObj2", 2);
const perObj3 = new ConcretePerObj("perObj3", 3);
const perObj4 = new ConcretePerObj("perObj4", 4);

console.log(perObj2.roll); // Outputs: 2
