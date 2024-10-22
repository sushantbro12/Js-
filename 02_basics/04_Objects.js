// const tinderUser = new Object(); //singleton object

const tinderUser = {}; //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sushant";
tinderUser.isLoggedIn = false;

console.log(tinderUser); //{ id: '123abc', name: 'sushant', isLoggedIn: false }

const regularUSer = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sushant",
      lastname: "tripathee",
    },
  },
};

console.log(regularUSer.fullname); //{ userfullname: { firstname: 'sushant', lastname: 'tripathee' } }
console.log(regularUSer.fullname.userfullname.firstname); // sushant

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj5 = { 5: "c", 6: "d" };

const obj3 = { obj1, obj2 }; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }
const obj4 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj6 = Object.assign({}, obj1, obj2, obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }

//most used 90% of the time
const obj7 = { ...obj1, ...obj2, ...obj5 }; //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }

const users = [
  {
    id: 1,
    email: "s@gmail1.com",
  },
  {
    id: 2,
    email: "s@gmail2.com",
  },
  {
    id: 3,
    email: "s@gmail3.com",
  },
];

console.log(users[1].email); //s@gmail2.com

console.log(tinderUser); //{ id: '123abc', name: 'sushant', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'sushant', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'sushant' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
