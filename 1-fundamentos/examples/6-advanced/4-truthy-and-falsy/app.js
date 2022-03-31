// Valores falsos
var value0 = Boolean(); // false
var value1 = Boolean(0); // false
var value2 = Boolean(null); // false
var value3 = Boolean(NaN); // false
var value4 = Boolean(undefined); // false
var value5 = Boolean(false); // false
var valor6 = Boolean(""); // false

// Valores verdaderos
var valor6 = Boolean("a"); // true
var valor7 = Boolean(1); // true
var valor8 = Boolean([]); // true
var valor9 = Boolean({}); // true
var valor10 = Boolean(function(){}); // true
var valor11 = Boolean(true); // true

let price = 200;
let color = "Red";
let result;

console.log("Comprobar los valores 'true'");
// Evaluar la expresion
result = price > 10;
console.log(result);

// Prueba la expresion
if(price > 10) {
    console.log("Price is > 10");
}

// Comprueba si el precio tiene algo distinto de cero
if(price) {
    console.log("Price is > 0");
}

// Check if color has characters in it
if(color) {
    console.log("color tiene un valor");
}
console.log("");
console.log("Comprobar los valores 'false'");

// Establecer valor en nulo, se vuelve falso
color = null;
console.log("color == null = " + Boolean(color));

// Set value to empty string, it becomes false
color = "";
console.log("color == '' = " + Boolean(color));

// Establecer valor en una cadena vacía, se vuelve falso
color = undefined;
console.log("color == undefined = " + Boolean(color));

// Declarar variable y no inicializar, es falso
let value;
console.log("'let value' = " + Boolean(value));

// El resultado de NaN es falso 
value = 100 / "test";
console.log("100 / 'test' = " + Boolean(value));