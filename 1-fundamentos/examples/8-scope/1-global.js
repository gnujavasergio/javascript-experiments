var firstName = 'Sergio';
var firstName = 'SERGIO'; // Se puede reasignar pero es una mala practica
let lastName = 'Ochoa';
// let lastName = "OCHOA"; // SyntaxError: Identifier 'lastName' has already been declared
const fullName = 'Sergio Ochoa';
// const fullName = 'SERGIO OCHOA'; // SyntaxError: Identifier 'fullName' has already been declared

let showPrint = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(fullName);
}
showPrint();

// Utilizar una variable sin antes haberla creado es una mala practica
let message = () => {
    globalVar = 'Esto es una mala practica'
}
message();
console.log(globalVar);

let greet = () => {
    var greetingLocal = greetingGlobal = 'Esto no se debe hacer es otra mala practica';
}

greet();
console.log(greetingGlobal);