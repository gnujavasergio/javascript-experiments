var a1 = 45;
var b1 = 10;
var b2 = '10';

// Almacenzar una condición
var isBool = b1 == b2;

console.log(`${b1} == '${b2}' = ${b1 == b2}`); // true
console.log(`${b1} != '${b2}' = ${b1 != b2}`); // false 10 != "10"
console.log(`${b1} === '${b2}' = ${b1 === b2}`); // false
console.log(`${b1} !== '${b2}' = ${b1 !== b2}`); // true 10 !== "10"
console.log(`${a1} < ${b1} = ${a1 < b1}`);
console.log(`${a1} > ${b1} = ${a1 > b1}`);
console.log(`${a1} >= ${b1} = ${a1 >= b1}`);
console.log(`${a1} <= ${b1} = ${a1 <= b1}`);

var developer = {
    firstName: 'Sergio'
}

var desarrollador = {
    firstName: 'Sergio'
}

console.log(developer === desarrollador); // false hace referencia a otro objeto

var backend = developer;
console.log(developer === backend); // true hace referencia al mismo objeto

var frontend = {
    ...developer
};

console.log(developer === frontend); // false porque frontend es un objeto diferente