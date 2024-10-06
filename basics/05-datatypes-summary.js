// Primitive Data types => Call by value

// 7 types : String , Number, Boolean, null: empty not zero, undefined, Symbol, BigInt: scientific values

// JS is dynamically typed automatically defines the type of variables unlike C language which is static typed

//Reference (Non primitive)

//Array, Objects, Functions,

//symbol

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false
console.log(id);
console.log(anotherId);

const bigNumber = 3435355343534534n; // n last ma is big int
console.log(bigNumber);

const heros = ["hero", "gunda", "villan"];

// let myObj = {
//   name: "sushant",
//   age: 22,
// };

// const myFunction = function () {
//   console.log("hello world");
// };

console.log(typeof bigNumber);
