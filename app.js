//////////////////////////////////////////////////////////////////////////////////
//                             Data Structures
//    - a way of organizing data that is stored in a computer or database
//    - each type of data structure represent a diffrent way of organizing database
//    - some are fast at storing and recording data
//    - some are fast at searching and retriveing data
//////////////////////////////////////////////////////////////////////////////////
//                          Constructor functions
//
// function User(firstName, lastName, age, gender) {
// this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// this.gender = gender;
// };
//
//
// var user1 = new User('John', 'Smith', 26, 'male');
// console.log(user1);
// User {firstName: "John", lastName: "Smith", age: 26, gender: "male"}
//
//
// var user200 = new User('Jill','Robinson', 25, 'female');
// console.log(user200);
// User {firstName: "Jill", lastName: "Robinson", age: 25, gender: "female"}
//
//
// //////////////////////////////////////////////////////////////////////////////////
// //                              Prototypes
//
// User.prototype.email = '@facebook.com';
// "@facebook.com"
//
// user1.email
// "@facebook.com"
//
// User.prototype.getEmail = function(){
//     return this.firstName + this.lastName + this.email
// }
//
// user1.getEmail()
// "JohnSmith@facebook.com"
//
//
// //////////////////////////////////////////////////////////////////////////////////
// //                            Linked List
//
// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }
//
// function Node(value, next, prev) {
//   this.value = value;
//   this.next = next;
//   this.prev = prev;
// }
//
// LinkedList.prototype.addToHead = function (value) {
//   var newNode = new Node(value, this.head, null);
//     if(this.head){
//     this.head.prev = newNode;
//     }
//     else {
//     this.tail = newNode;
//     }
//     this.head = newNode;
// };
//
// LinkedList.prototype.addToTail = function(value) {
//   var newNode = new Node(value, null, this.tail);
//   if(this.tail) {
//     this.tail.next = newNode;
//   }
//   else {
//     this.head = newNode;
//   }
//   this.tail = newNode;
// };
//
// LinkedList.prototype.removeHead = function () {
//   if(!this.head) return null;
//   var val = this.head.value;
//   this.head = this.head.next;
//   if(this.head) {
//     this.head.prev = null;
//   }
//   else {
//     this.tail = null;
//   }
//   return val;
// };
//
// LinkedList.prototype.removeTail = function () {
//   if(!this.tail) return null;
//   var val = this.tail.value;
//   this.tail = this.tail.prev;
//   if(this.tail) {
//     this.tail.next = null;
//   }
//   else {
//     this.head = null;
//   }
//   return val;
//  };
//
// LinkedList.prototype.search = function (searchValue) {
//   var currentNode = this.head;
//   while(currentNode) {
//     if(currentNode.value === searchValue) return currentNode.value;
//     currentNode = currentNode.next;
//   }
//   return null;
// };
//
// LinkedList.prototype.indexOf = function(value) {
//   var indexes = [];
//   var currentIndex = 0;
//   var currentNode = this.head;
//   while(currentNode) {
//     if(currentNode.value === value) {
//       indexes.push(currentIndex);
//     }
//     currentNode = currentNode.next;
//     currentIndex++;
//   }
//   return indexes;
// }
//
// var myLL = new LinkedList();
// myLL.addToHead(20);
// myLL.addToHead(70);
// myLL.addToHead('hello');
// myLL.addToTail(19);
// myLL.addToTail('world');
// myLL.addToTail(20);
//
// console.log(myLL.indexOf(20));

//////////////////////////////////////////////////////////////////////////////////
//                            Binary Search Tree

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if(value <= this.value) {
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if(value > this.value) {
    if(!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
}

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.right.left.left)
console.log(bst.left.right.left)
console.log(bst.right.right)




//////////////////////////////////////////////////////////////////////////////////
