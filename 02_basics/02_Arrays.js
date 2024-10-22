const marvel_heros = ["theor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

marvel_heros.push(dc); //[ 'theor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros);

console.log(marvel_heros[3][0]); //superman

const allHeros = marvel_heros.concat(dc);

const all_new_heros = [...marvel_heros, ...dc];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5];

console.log(Array.isArray("sushant")); //false
console.log(Array.from("sushant")); //[
//  's', 'u', 's',
// 'h', 'a', 'n',
//  't'
// ]

console.log(Array.from({ name: "hitesh" })); // [] interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
