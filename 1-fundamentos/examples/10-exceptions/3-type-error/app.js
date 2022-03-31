
function referenceErrorSample() {
    let result;

    try {
        // Reference error porque 'x' no esta definido
        result = x / 10;
    } catch (error) {
        handleError(error);
    }
}

function rangeErrorSample() {
    let result = 0;

    try {
        // Range error porque un numero no puede tener 200 cifras significativas
        result.toPrecision(200);
    } catch (error) {
        handleError(error);
    }
}

function typeErrorSample() {
    let result = 0;

    try {
        // Type error porque el resultado es un número
        result.toUpperCase();
    } catch (error) {
        handleError(error);
    }
}

function uriErrorSample() {
    let uri = "http://www.netinc.com/path%%%/file name";

    try {
        // URI error
        decodeURI(uri);
    } catch (error) {
        handleError(error);
    }
}

function syntaxErrorSample() {
    try {
        // Syntax error porque falta una comilla simple final
        let sum = eval("alert('Hello)");
    } catch (error) {
        handleError(error);
    }
}

function handleError(error) {
    switch (error.name) {
        case "ReferenceError":
            console.log("Reference error: " + error.message);
            break;
        case "RangeError":
            console.log("Range error: " + error.message);
            break;
        case "TypeError":
            console.log("Type error: " + error.message);
            break;
        case "URIError":
            console.log("URI error: " + error.message);
            break;
        case "SyntaxError":
            console.log("Syntax error: " + error.message);
            break;
        case "EvalError":
            console.log("Evaluation error: " + error.message);
            break;
        default:
            console.log("Error Type: " + error.name + " - Message: " + error.message);
            break;
    }
}

referenceErrorSample();
rangeErrorSample();
typeErrorSample();
uriErrorSample();
syntaxErrorSample();
