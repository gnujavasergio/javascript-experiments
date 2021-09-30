const suma1 = function (a, b) {
    return `${a} + ${b} = ${a + b}`;
}
const suma2 = (a, b) => {
    return `${a} + ${b} = ${a + b}`;
}
// Si tiene mas de 2 parametros no se puede quitar los parentesis
const suma3 = (a, b) => `${a} + ${b} = ${a + b}`;


const showprint1 = function (text) {
    console.log(text);
}
const majorAge2 = (text) => {
    console.log(text);
}
// Si tiene un solo parametro podemos quitar las parametesis, las llaves y el return
const showPrint3 = cadena => console.log(cadena);

let result = suma3(4, 5);
showPrint3(result);