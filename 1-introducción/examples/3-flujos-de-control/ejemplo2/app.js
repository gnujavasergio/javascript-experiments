var value = 2;
switch (value) {
    case 1:
        print('1');
        break;
    case 2:
        console.log('2');
        break;
    default:
        console.log("Default $value");
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
        console.log("$a / $b : ${a / b}");
        break;
    case "+":
        console.log("$a + $b : ${a + b}");
        break;
    case "-":
        console.log("$a - $b : ${a - b}");
        break;
    case "*":
        console.log("$a * $b : ${a * b}");
        break;
    default:
        throw ("Ninguna operación");
}