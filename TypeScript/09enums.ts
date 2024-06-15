// they are commonly used when you want to represent a set of related values and choose one value from multiple options. enums provide a convenient way to define a set of named values and associate them with specific meaning. 

enum Roles {
    user, 
    admin
}
type LoginDetails = {
    name?:string;
    email: string;
    password: string;

      // Define 'role' as a string that can accept either 'user' or 'admin'

    role: 'user' | 'admin';
}

const user1:LoginDetails = {
    email :"wfwferw@gmail.com",
    password: "password123",
    role:"admin",
}
const user2:LoginDetails = {
    name:"zoro",
    email :"wfwferw@gmail.com",
    password: "password123",
    role:"user",
}