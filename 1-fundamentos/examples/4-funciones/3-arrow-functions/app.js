/**
 * Arrow function con 1 parametro
 */
let greet1 = function greetins(name) {
    return 'Hola ' + name;
}
console.log(greet1('Sergio'));

let greet2 = function (name) {
    return 'Hola ' + name;
}
console.log(greet1('Sergio'));

let greet3 = name => 'Hola ' + name;
console.log(greet3())

/**
 * Arrow functions con mas de 2 parametros
 */
const suma1 = function (a, b) {
    return `${a} + ${b} = ${a + b}`;
}
console.log(suma1(5, 5));

const suma2 = (a, b) => {
    return `${a} + ${b} = ${a + b}`;
}
console.log(suma2(4, 5));

// Si tiene mas de 2 parametros no se puede quitar los parentesis
const suma3 = (a, b) => `${a} + ${b} = ${a + b}`;
console.log(suma3(4, 5));