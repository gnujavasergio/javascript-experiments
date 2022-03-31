let result;
let x = 100;

try {
    console.log("Se producira un error.")
    result = x / 10;
    console.log("Esta line se ejecutara")
} catch (error) {
    console.log("En el bloque catch: " + error.message);
} finally {
    console.log("En el bloque finally");
}