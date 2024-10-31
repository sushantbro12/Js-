const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  // for each does not return value
  //   console.log(item);
});

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const number = myNums.filter((num) => num > 5); //[ 6, 7, 8, 9, 10 ]
// console.log(number);

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num); //[ 5, 6, 7, 8, 9, 10 ]
  }
});

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
    edition: "First",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949,
    edition: "First",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishYear: 1813,
    edition: "Second",
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
    edition: "Third",
  },
  {
    title: "Moby Dick",
    genre: "Adventure",
    publishYear: 1851,
    edition: "First",
  },
];

// const userBooks = books.filter((book) => book.edition === "First"); // filter all first edition books
const userBooks = books.filter((book) => book.publishYear >= 1930); //filter
console.log(userBooks);
