let numbers = [1, 2, 3, 4];
let numeros = [...numbers];

numeros.push(5);
numeros[0] = -1;

console.log(numbers);
console.log(numeros);