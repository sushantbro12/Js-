//{} -> scope
// var ingnore scope and ja pani value update and access huncha

let a = 300; //global scope ko value is accessed anywhere
var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // local scope ko bahira ni value aaucha //block scope
  console.log("inner ", a);
}

console.log(c); //300 hunu parne loop ko bahira but var ma 30 huncha scope problem
console.log(a); //300
