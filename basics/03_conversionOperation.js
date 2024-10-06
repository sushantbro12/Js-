let score = 33;
let score3 = null;
let score1 = "33";
let score2 = "33abc";
let score4 = undefined;
let score5 = true;

// console.log(typeof score); //number

// console.log(typeof score1); //string

let valueInNumber = Number(score1); // 33
let valueInNumber1 = Number(score2); // NaN
let valueInNumber2 = Number(score3); // changes null to zero
let valueInNumber3 = Number(score4); // undefined to NAN
let valueInNumber4 = Number(score5); // boolean to 1 or 0 // T-1 F-0

// console.table([
//   valueInNumber,
//   valueInNumber1,
//   valueInNumber2,
//   valueInNumber3,
//   valueInNumber4,
// ]);

// "33" => 33
// "33abc" => NaN
//true => 1;
//false => 0

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
//""=> false
//"sushant" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);

//******************Operations****************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " sushant";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`); //y is assigned 3 (original value) then x is increased  to 4 x:4 , y=3 //increments variable after it is used

let a = 3;
let b = ++a;

console.log(`a:${a}, b:${b}`); //a is incremented to 4 and is assigned to b : a:4 , b:4 //increment the variable before it is used
