var myNumber = 1;
switch (myNumber) {
    case 1:
        console.log('Soy uno!');
        break;
    case 10:
        console.log('Soy un 10!');
        break;
    case 100:
        console.log('Soy un 100!');
    default:
        console.log(`No soy nada ${myNumber}`);
}

var speakSpanish = "Bolivia";
switch (speakSpanish) {
    case "Inglaterra":
        console.log("Incorrecto");
        break;
    case "Alemania":
        console.log("Incorrecto");
        break;
    case "Bolivia":
        console.log("Correcto");
        break;
    default:
        throw ("Ninguna Opción");
}

var a = 4;
var b = 3;
var operation = "/";
switch (operation) {
    case "/":
        console.log(`${a} / ${b} : ${a / b}`);
        break;
    case "+":
        console.log(`${a} + ${b} : ${a + b}`);
        break;
    case "-":
        console.log(`${a} - ${b} : ${a - b}`);
        break;
    case "*":
        console.log(`${a} * ${b} : ${a * b}`);
        break;
    default:
        throw ("Ninguna operación");
}