//Utilizando strings
const saludo = "Hola mundo"

console.log(saludo.includes("Hola")); // true
console.log(saludo.includes("Mundo")); // false
console.log(saludo.includes(" ")); // true
console.log(saludo.includes("Hola", 1)); // false
console.log(saludo.includes("mundo", -5)); // true