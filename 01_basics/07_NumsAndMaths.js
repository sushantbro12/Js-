const score = 400;

const balance = new Number(100);
// console.log(balance); // [ 'sushantbro', 'hc', 'com' ]

// console.log(balance.toString());

// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 1123.8966;

console.log(otherNumber);
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //1,000,000

///*********** Maths************************* */

console.log(Math);

console.log(Math.abs(-4)); // 4

console.log(Math.round(4.3)); // 4

console.log(Math.ceil(4.2)); // 5

console.log(Math.floor(4.9)); //4

console.log(Math.min(4, 3, 6, 8)); //3

console.log(Math.random()); //betwenn 0 and 1

console.log(Math.round(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
