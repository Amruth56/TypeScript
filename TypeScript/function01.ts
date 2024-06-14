// greeting function
function greet(name: string, city: string, id: any) {
  console.log(`hello ${name} from ${city} and your id is ${id}`);
}

greet("qwe", "sdsd", 56);

//response function for
const response = (name: string) => {
  console.log(`hello ${name} thank you having me here`);
};
response("ddfd");

//function return type
const sum2 = (a: number, b: number): string => {
  return `sum of ${a} and ${b} is ${a + b}`;
};

console.log(sum2(2, 3));


//to check a palindrome 
const isPalindrome = (palin:string) :boolean => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin
}

console.log(isPalindrome("123321"))