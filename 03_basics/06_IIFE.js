// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //named IIFE
  console.log("DB connected");
})();

//inmmediately invoked function

((name) => {
  // simple IIFE
  console.log(`db connc 2 ${name}`);
})("sushant");

// DB connected
// db connc 2
