const myArr = [0, 1, 2, 3, 4, 5, true, "sushant"];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[0]);

myArr.push(7);
myArr.push(7);
myArr.pop();

// myArr.unshift(10); //insert at the start of array
myArr.shift();

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr3 = myArr.join(); //convert  values to string
console.log(newArr3);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("A", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
