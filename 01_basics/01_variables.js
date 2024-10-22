const accoundId = 144553;
let accountEmail = "sushantbro12@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

let accountState;

// accoundId = 2; // not allowed

accountEmail = "sus@gmail.com";
accountPassword = "212121";
accountCity = "Kathmandu";

// console.log(accoundId);

/* 

Prefer not to use var beacuse of issue in block scope and functional scope

*/

console.table([
  accoundId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
