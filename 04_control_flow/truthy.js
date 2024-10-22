//falsy values
//false, 0,-0,BigInt 0n,"",null,undefined,Nan

//except these all are truthy values

//truthy some tricky -> "0",'false', "empty space insisde strng ", {empty object}, function(){}-empty function

const userEmail = "h@hitesh.ai"; //T
if (userEmail) {
  console.log("email exists"); // this runs
} else {
  console.log("dont have email");
}

const userEmail1 = ""; //F
if (userEmail1) {
  console.log("email exists");
} else {
  console.log("dont have email"); //runs
}

const userEmail2 = []; // empty array -> true
if (userEmail2) {
  console.log("email exists");
} else {
  console.log("dont have email");
}

userEmai6l = [];
if (userEmai6l.length === 0) {
  console.log("Array is empty"); //run
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //convert object keys into a array
  console.log("empty ");
}

//Nullish Coalescing Operator

let val1;
val1 = 5 ?? 10;
console.log(val1); //5
val1 = null ?? 10;
console.log(val1); //10

var2 = undefined ?? 15;
console.log(var2); //15

val5 = null ?? 10 ?? 15;
console.log(val5); //10

//ternary Oeratory

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); //more than 80
