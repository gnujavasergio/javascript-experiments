// boolean
var isPro = false;
var isPro = true;


// Variables sin tipo o inferido
// number
// integer
var isInteger = 1234; // número decimal
var isNegativo = -123; // un número negativo

// Valores octales
// Empieza con 0o
// Digitos comprendidos entre 0 y 7
var isOctal = 0o123; // número octal (equivale a 83 decimal)

// Valores hexadecimanles
// Empieza con 0x
// Valores comprendidos entre 0 a F
// Valores numericos de 0 a 9 y A,B,C,D,E,F
var isHexadeciml = 0x1A; // número hexadecimal (equivale a 26 decimal)

// Valores binarios
// Empieza con 0b
// Valores comprendidos entre 0  1
var isBinario = 0b11111111; // número binario (equivale al 255 decimal)

var phone = 73434645;
typeof phone;

// Valores flotantes
var isDecimal1 = 1.234;
var isDecimal2 = 1.2e3;
var isDecimal3 = 7E-10;
var isDecimal4 = 1_234.567;

var height = 1.75;
typeof height;

var price = 200.344;
var total = Math.round(price*100*3)/100;
console.log('Total: ' + total);

var totalStr = total.toFixed(3);
console.log(totalStr);

var totalFloat = parseFloat(totalStr);
console.log(totalFloat);



