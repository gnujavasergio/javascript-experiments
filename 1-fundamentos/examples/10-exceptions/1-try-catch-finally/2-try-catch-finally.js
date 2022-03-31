let result;
try {
    console.log("Se producira un error.")
    result = x / 10;
    console.log("Esta line nunca se ejecuto")
} catch (error) {
    console.log("En el bloque catch: " + error.message);
} finally {
    console.log("En el bloque finally");
}