const numbers = [5, 4, 8, 6, 2]
let suma = 0

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    suma = suma + number;
}

console.log(suma) // 145

const result = numbers.reduce((sum, item) => sum + item, 0);
console.log(result);