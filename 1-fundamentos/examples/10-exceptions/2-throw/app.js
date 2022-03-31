try {
    division();
} catch (error) {
    console.log(error.message + " - Error type: " + error.name);
}

function division() {
    let result;
    try {
        result = x / 10;
    } catch (error) {
        throw {
            "message" : 'En el metodo division ocurrio un error: ' + error.message,
            "name": "DivisionError"
        }
    }
}