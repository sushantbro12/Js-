const course = {
  coursename: "JS in hindi",
  price: "999",
  courseInstructor: "sushant",
};

//object destructuring

const { coursename, price, courseInstructor: instructor } = course;

console.log(instructor); //sushant

//Json key - string value - string

// {
//     "name":"sushant",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//APi array format
// [{}, {}, {}];
