// Aqui se genera el hoisting
console.log(name);  // undefined

var name;
name = "Sergio";

// Hoisting de funciones
hey(); // Hola undefined

function hey() {
    console.log("Hola " + myName);
}

var myName = "Sergio";