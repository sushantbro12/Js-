//reduce
const myNums = [1, 2, 3];

const initialValue = 0;

// const myTotal = myNums.reduce(function (acc, currvalue) {
//   console.log(`acc:${acc} and currval:${currvalue}`);

//   return acc + currvalue;
// }, initialValue);

const myTotal = myNums.reduce((acc, curr) => acc + curr, initialValue); //6

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile course",
    price: 5999,
  },
  {
    itemName: "data course",
    price: 2999,
  },
];

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(price);
