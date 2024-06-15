// they are commonly used when you want to represent a set of related values and choose one value from multiple options. enums provide a convenient way to define a set of named values and associate them with specific meaning. 


//when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default enum constant is 0
enum Roles {
    user = "user",
    admin = "admin"
  }
  
  type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    gender: "male" | "female";
    role: Roles;
  }
  
  const user1: LoginDetails = {
    name: "qwwdq",
    email: "wfwferw@gmail.com",
    password: "password123",
    gender: "male",
    role: Roles.admin,
  }
  
  const user2: LoginDetails = {
    name: "zoro",
    email: "wfwferw@gmail.com",
    password: "password123",
    gender: "female",
    role: Roles.user,
  }
  
  // Correct the function type signature and implementation
  const isAdmin = (user: LoginDetails): string => {
    const { name, role } = user;
    // Return a string instead of void
    return role === Roles.admin ? `${name} is allowed` : `${name} is not allowed`;
  }
  
  // Example usage:
  console.log(isAdmin(user1)); // Output: qwwdq is allowed
  console.log(isAdmin(user2)); // Output: zoro is not allowed
  