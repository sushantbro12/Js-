//if

// if (true) {
//   //exectures
// }

// if (false) {
//   //does not execute
// }

const isUserLoggedIn = true;
const temperature = 41;

if (3 != 2) {
  //   console.log("t"); //t
}

if (2 == "2") {
  //check only number
  //   console.log("executed"); //executed
}

if (2 === "2") {
  console.log("executed"); //false condition data type also check not executed
}

if (temperature < 50) {
  //   console.log("temp less than 50"); //temp less than 50
} else {
  console.log("temp greate than 50");
}

const balance = 1000;

// if (balance > 500) console.log("test"); //test// implicit scope one line scope // not good practice

if (balance < 500) {
  console.log("less than 500 ");
} else if (balance < 750) {
  console.log("less than 750 ");
} else {
  //   console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  //both true aaune parcha and statement
  //   console.log("allow to buy"); //run
}

if (2 === 2 || 3 === 6 || 1 === 5) {
  //only one true needed
  //   console.log("run");
}
