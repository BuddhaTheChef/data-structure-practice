//////////////////////////////////////////////////////////////////////////////////
//                             Data Structures
//    - a way of organizing data that is stored in a computer or database
//    - each type of data structure represent a diffrent way of organizing database
//    - some are fast at storing and recording data
//    - some are fast at searching and retriveing data
//////////////////////////////////////////////////////////////////////////////////
//                          Constructor functions

function User(firstName, lastName, age, gender) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.gender = gender;
};


var user1 = new User('John', 'Smith', 26, 'male');
console.log(user1);
User {firstName: "John", lastName: "Smith", age: 26, gender: "male"}


var user200 = new User('Jill','Robinson', 25, 'female');
console.log(user200);
User {firstName: "Jill", lastName: "Robinson", age: 25, gender: "female"}


//////////////////////////////////////////////////////////////////////////////////
