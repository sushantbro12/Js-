const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},  welcome to wbesite`); //this -> current context
    // console.log(this);
    //
    // {
    //   username: 'sushant',
    // price: 999,
    // welcomeMessage: [Function: welcomeMessage]
    // }

    //
  },
};

user.welcomeMessage(); ////hitesh,  welcome to wbesite
user.username = "sushant";
user.welcomeMessage(); //sushant,  welcome to wbesite

// console.log(this); //{} context in node environment points to empty object

function chai() {
  let username = "sushant";
  console.log(this.username);
  //{}
  //undefined // this can only be insode object not functions
}

// chai();

const chai1 = () => {
  let username = "sushant";
  console.log(this); // {}
};

// chai1();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addTwo(2, 3)); // 5

//implicit return

const addTwo1 = (num1, num2) => num1 + num2;

// console.log(addTwo1(3, 4)); //7

// {} ma return is required () ma no need to write return in arrow func

//explicit retrun - when return keyword is used  // implicit when return keyword is not used

const addTwo2 = (num1, num2) => ({
  username: "sushant",
});

console.log(addTwo2(2, 3)); //{ username: 'sushant' } need to wrap inside () for objects
