function calculateCartPrice(...num1) {
  //rest operator
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 800)); //[ 200, 400, 500, 800 ]

function calculateCartPrice2(val1, val2, ...num2) {
  //rest operator
  return num2;
}

// console.log(calculateCartPrice2(200, 400, 500, 2000)); //[ 500, 2000 ]

const user = {
  username: "sushant",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `user name is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user); //user name is sushant and price is 199

handleObject({ username: "sam", price: 399 });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); //400

console.log(returnSecondValue([200, 400, 100, 600])); //400
