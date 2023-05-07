// variables
var firstName = 'Sergio';
var firstName = 'SERGIO'; // Se puede redeclaracion pero es una mala practica
let lastName = 'Ochoa';
// let lastName = "OCHOA"; // SyntaxError: Identifier 'lastName' has already been declared
const fullName = 'Sergio Ochoa';
// const fullName = 'SERGIO OCHOA'; // SyntaxError: Identifier 'fullName' has already been declared

// Global Scope
var fruit = 'Apple'; // Global
console.log(fruit);

function bestFruit() {
    console.log(fruit)
}
bestFruit();

// Utilizar una variable sin antes haberla creado es una mala practica
// No se declaro la variable pero se declara como variable global.
function countries() {
    country = 'Colombia'; // Global
    console.log(country);
}
countries();
console.log(country)


let greet = () => {
    var greetingLocal = greetingGlobal = 'Esto no se debe hacer es otra mala practica';
}

greet();
console.log(greetingGlobal);