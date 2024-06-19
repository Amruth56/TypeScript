/* In TypeScript, a type is a way to give a name to a specific type or combination of types. It allows you to create a custom name for qa type, making it easier to reuse and refer to the same type indifferent parts of your code */


type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
      city: string;
      state: string;
      country: string;
    };
}

const person1:Person = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
  };

const person2:Person = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
  };
const person3:Person = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
  };
const person4:Person = {
    name: "John",
    age: 21,
    isStudent: true,
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
  };
  
  //accessing an object data
  console.log(person1.address.state);
  
  //updating object properties
  person1.address.state = "usa";
  console.log(person1.address.state);


  type qwe = {
    name: string;
    price: number;
    quantity: number;

  }
  const product:qwe = {
    name : "mat",
    price: 2322,
    quantity: 3
}

const totalPrice = (product: qwe) => {
    return `${product.name} total cost ${product.price * product.quantity}`;
}  
console.log(totalPrice(product));