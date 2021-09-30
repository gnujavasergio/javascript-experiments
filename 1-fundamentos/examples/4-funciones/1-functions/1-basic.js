'use strict';

// Funcion Simple
function greetings(name) {
    console.log(`Hola ${name}`);
}

greetings("Sergio");
greetings("Rocio");

// Funcione con retorno
function saludos(name) {
    return `Hola ${name}`;
}

let result = saludos('Sergio');
console.log(result);