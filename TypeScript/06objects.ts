const person: {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    state: string;
    country: string;
  };
} = {
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
console.log(person.address.state);

//updating object properties
person.address.state = "usa";
console.log(person.address.state);
