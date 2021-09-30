// ES5
{
    var globalVar = "Global Var";
}

// ES6
{
    let globalLet = "Global let";
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet); no se puede acceder

function printNumbersVar() {
    for (var i = 0; i < 10; i++) {
        setTimeout(
            function printer() {
                console.log(i);
            },
            100 * i
        );
    }
}

printNumbersVar();


function printNumbersLet() {
    for (let i = 0; i < 10; i++) {
        // Cuando usamos let en un for-loop, es como si definieramos `i` aquí.
        setTimeout(
            function printer() {
                console.log(i);
            },
            100 * i
        );
    }
}

printNumbersLet()