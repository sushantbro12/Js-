const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);

//[
//    11, 12, 13, 14, 15,
//    16, 17, 18, 19, 20
//  ]

// console.log(newNums);

//chaining

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

//   [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]

console.log(newNums);
