// elements in the tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary

// eg : represent a persons basic information, including their name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice because these 3 elements have a specif order and type.

//defining a tuple type for person information
type PersonInfo = [string, number, boolean];

//Function to display person information
const displayPersonInfo = (person: PersonInfo): void => {
  const [name, age, hasDriverLicense] = person;
  console.log(
    `name: ${name}, age: ${age}, driver License: ${
      hasDriverLicense ? "Yes" : "No"
    }`
  );
};

//example usage
const p1: PersonInfo = ["qwdqw", 34, true];
const p2: PersonInfo = ["bvf", 4, false];

displayPersonInfo(p1);
displayPersonInfo(p2);
