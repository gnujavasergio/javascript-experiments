function isColorRed(value) {
    console.log("en la función isColorRed()");
    return value === "Red";
}

function isGreaterThan1400(value) {
    console.log("En la función isGreaterThan1400()");
    return value > 1400;
}

// Cortocircuito con &&
// El primer resultado es falso, la segunda parte nunca se evalua.
let result = isColorRed("Black") && isGreaterThan1400(1400);


// Cortocircuito ||
console.log("");
console.log("Calling isColorRed() first");

// Todos las operaciones se evaluan hasta que devuelven un valor verdadero
result = isColorRed("Red") || isGreaterThan1400(200);

// Todos las operaciones se evaluan hasta que devuelven un valor verdadero el resto se salta
console.log("");
console.log("Llamando primero a isGreaterThan1400()");
result = isGreaterThan1400(200) || isColorRed("Black");
