function one() {
  const username = "sushantbro";

  function two() {
    const website = "youtube";
    console.log(username); //inside big function scope
  }
  //   console.log(website); //oustise scope
  two();
}

one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website); //hiteshyoutube
  }
}

//++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++

console.log(addone(5)); //can be called before declaration

function addone(num) {
  return num + 1;
}

// addTwo(5);  //cannot called before declaration if variable is declared in making function

const addTwo = function (num) {
  return num + 2;
};
