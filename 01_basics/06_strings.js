const name = "sushant";
const repoCount = 50;

console.log(name + repoCount + "Value"); outdated symbol

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation modern method

const gameName = new String("sushantbro-hc-com");

console.log(gameName); // [String: 'sushantbro']
console.log(gameName[0]); // s

console.log(gameName.length); //8
console.log(gameName.toUpperCase()); //SUSHANTBRO
console.log(gameName.charAt(6)); //t
console.log(gameName.indexOf("t")); //6

const newString = gameName.substring(0, 4);
console.log(newString); // sush

// const anotherString = gameName.slice(0, 4); //sush
const anotherString = gameName.slice(-8, 4); //sh
console.log(anotherString);

const newStringOne = "   hitesh   ";
console.log(newString);
console.log(newString.trim()); //remove forward and backward space

const url = "https://hitesh.com%20";
console.log(url.replace("%20", "-"));  //https://hitesh.com-

console.log(url.includes("hitesh")); //true
console.log(url.includes("sushant")); //false

console.log(gameName.split("-")); //[ 'sushantbro', 'hc', 'com' ]
