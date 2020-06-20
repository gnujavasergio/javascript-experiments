var a1 = 45;
var b1 = 10;
var b2 = "10";

// Almacenzar una condición
var isBool = b1 == b2;

console.log(`${b1} == ${b2} = ${b1 == b2}`); // true
console.log(`${b1} != ${b1} = ${b1 != b2}`); // false 10 != "10"
console.log(`${b1} === ${b2} = ${b1 === b2}`); // false
console.log(`${b1} !== ${b2} = ${b1 !== b2}`); // true 10 !== "10"
console.log(`${a1} < ${b1} = ${a1 < b1}`);
console.log(`${a1} > ${b1} = ${a1 > b1}`);
console.log(`${a1} >= ${b1} = ${a1 >= b1}`);
console.log(`${a1} <= ${b1} = ${a1 <= b1}`);