// Operador + con numeros y cadenas
let price = 200;
let stringValue = "100";
let result = 0;

console.log("price = " + price.toString());

result = price + stringValue;
console.log("result (number + string) = " + result.toString());

result = price + (+stringValue);
console.log("result (number + (+stringValue)) = " + result.toString());