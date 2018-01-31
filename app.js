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
//                              Prototypes

User.prototype.email = '@facebook.com';
"@facebook.com"

user1.email
"@facebook.com"

User.prototype.getEmail = function(){
    return this.firstName + this.lastName + this.email
}

user1.getEmail()
"JohnSmith@facebook.com"


//////////////////////////////////////////////////////////////////////////////////
//                            Linked List

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
    if(this.head){
    this.head.prev = newNode;
    }
    else {
    this.tail = newNode;
    }
    this.head = newNode;
}

var LL = new LinkedList();

LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);
LL.addToHead(400);

console.log(LL);


//////////////////////////////////////////////////////////////////////////////////
