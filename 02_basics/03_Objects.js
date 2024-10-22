// singleton
//can be created form constructor Object.create

//object literals

const mysym = Symbol("key1");

const jsUSer = {
  name: "sushant",
  "full name": "sushantbro mrskilled",
  [mysym]: "mykey1",
  age: 20,
  location: "kathmandu",
  email: "sushantbro12@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sarurday"],
};

console.log(jsUSer.email);
console.log(jsUSer["email"]);

console.log(jsUSer["full name"]); //can only be accessed by this way

console.log(jsUSer[mysym]);

jsUSer.email = "chatgpt@.com"; //email changes

console.log(jsUSer.email);

// Object.freeze(jsUSer); //does not allow any more changes

jsUSer.greeting = function () {
  console.log("hello js user");
};

jsUSer.greetingTwo = function () {
  console.log(`Helloo Js user, ${this.name}`);
};

console.log(jsUSer.greeting());
console.log(jsUSer.greetingTwo());
