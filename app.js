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

// function BST(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }
//
// BST.prototype.insert = function(value) {
//   if(value <= this.value) {
//     if(!this.left) this.left = new BST(value);
//     else this.left.insert(value);
//   }
//   else if(value > this.value) {
//     if(!this.right) this.right = new BST(value);
//     else this.right.insert(value);
//   }
// }
//
// BST.prototype.contains = function(value) {
//   if(value === this.value) return true;
//   else if(value < this.value) {
//     if(!this.left) return false;
//     else return this.left.contains(value);
//   }
//   else if(value > this.value) {
//     if(!this.right) return false;
//     else return this.right.contains(value);
//   }
// }
//
// BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
//   if(order === 'pre-order') iteratorFunc(this.value);
//   if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
//   if(order === 'in-order') iteratorFunc(this.value);
//   if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
//   if(order === 'post-order') iteratorFunc(this.value);
// };
//
//
// BST.prototype.breathFirstTraversal = function(iteratorFunc) {
//   var queue = [this];
//   while(queue.length) {
//     var treeNode = queue.shift();
//     iteratorFunc(treeNode);
//     if(treeNode.left) queue.push(treeNode.left);
//     if(treeNode.right) queue.push(treeNode.right);
//   }
// }
//
// BST.prototype.getMinVal = function() {
//   if(this.left) return this.left.getMinVal();
//   else return this.value;
// };
//
// BST.prototype.getMaxVal = function() {
//   if(this.right) return this.right.getMaxVal();
//   else return this.value;
// }
//
// var bst = new BST(50);
//
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
// bst.insert(85);
// bst.insert(105);
// bst.insert(10);
//
// function log(value) {
//   console.log(value);
// }
//
// bst.depthFirstTraversal(log, 'pre-order');
// bst.depthFirstTraversal(log, 'in-order');
// bst.depthFirstTraversal(log, 'post-order');
//
// console.log('Min: ', bst.getMinVal());
// console.log('Max: ', bst.getMaxVal());

//////////////////////////////////////////////////////////////////////////////////

// UNicode value of any character by taking a value and giving a corresponding number
console.log('hello world'.charCodeAt(2)); ---> 103

//////////////////////////////////////////////////////////////////////////////////
//                                 Hash table

function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for(var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function(key,value) {
  var index = this.hash(key);
  console.log('INDEX: ', index);
  if(!this.buckets[index]){
    this.buckets[index] = new HashNode(key, value);
  }
  else if(this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
   currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if(!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while(currentNode) {
      if(currentNode.key === key) return currentNode.value;
      currentNode = cureentNode.next;
    }
    return null;
  }
};

var myHT = new HashTable(30);

myHT.insert('Dean', 'Dean@gmail.com');
myHT.insert('Jane', 'Jane@gmail.com');
myHT.insert('Dane', 'Dane@yahoo.com');
myHT.insert('Dean', 'DaneMane@gmail.com');
myHT.insert('Jane', 'JaneDOEYOOOO@gmail.com');

console.log(myHT.get('Dean'));




//////////////////////////////////////////////////////////////////////////////////
