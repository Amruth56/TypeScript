
type P = {
  name: string;
  age: number;
};
type Employee = {
  emp_id: number;
  department: string;
};

type EmployeeDetails = P & Employee
type EmployeeDetails2 = P | Employee



// in Intersection we should include the properties of both the type Aliases
const e :EmployeeDetails = {
    name: "John",
    age: 21,
    emp_id: 123,
    department: "Department"
}

// in Union we should the complete properties of at least 1 type Aliases

const e2 : EmployeeDetails2 = {
    name: "John",
    age: 21,
    department: "Department"
}

const myPersonalInfo : P = {
    name: "John",
    age: 21,
}


type User = {
    name: string,
    age: number
}

type MyLocation = {
    city: string,
    country: string
}

const user: User= {
    name: "John",
    age: 21,
}
const myLocation: MyLocation = {
    city:"Bengaluru", 
    country: "India"
}

const createUserProfile = (user: User, location: MyLocation):string => {
    return `Hello ${user.name} from ${location.city} ${location.country}!`
}

console.log(createUserProfile(user, myLocation))