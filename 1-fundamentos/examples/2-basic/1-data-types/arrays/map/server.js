const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Transformar cada numero  haciendo el doble de cada uno
let forNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    forNumbers.push(number * 2);
}
console.log(forNumbers);

// Lo mismo que el anterior pero con map
const mapNumbers = numbers.map(function (number) {
    return number * 2;
})
console.log(mapNumbers);

// Lo mismo con arrow functions
const arrowMapNumbers = numbers.map(number => number * 2);
console.log(arrowMapNumbers);

