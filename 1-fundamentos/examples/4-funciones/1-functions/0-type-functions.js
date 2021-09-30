// Funcion declarativa
function printUpper(value) {
    let result = value.toUpperCase();
    console.log(result);
}
printLower('bolivia')

// Funcion como expresión
let lowerText = function (value) {
    return value.toLowerCase();
}
console.log(lowerText('DEVELOPER'));
