function sayMyName() {
  console.log("I");
  console.log("s");
}

// sayMyName(); //function call
// sayMyName -> function reference

function addTwoNumbers(Number1, Number2) {
  console.log(Number1 + Number2);
}

const result = addTwoNumbers(3, 5); //result -> undefined can only be stored in result by return

function addTwoNumbers(Number1, Number2) {
  //   let result = Number1 + Number2;

  //   return result;

  return Number1 + Number2;
}

const result1 = addTwoNumbers(3, 5); // result -8

function loginUserMessage(username) {
  if (!username) {
    console.log("plese enter user name");
  } else {
    return `${username} just logged in`;
  }
}

console.log(loginUserMessage("sushant")); //sushant just logged in
console.log(loginUserMessage()); //undefined just logged in

console.log(loginUserMessage()); //plese enter user name // undefined

//note ""-false undefined - false

//default values

function loginUserMessage1(username = "sam") {
  if (!username) {
    console.log("plese enter user name");
  } else {
    return `${username} just logged in`;
  }
}

console.log(loginUserMessage1()); //sam just logged in
console.log(loginUserMessage1("sushant")); //sushant just logged in
