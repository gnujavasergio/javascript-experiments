const numbers = [1, 2, 3, 4];

let even = false;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
        even = true;
    }
}
console.log(even);

const value = numbers.some(number => number % 2 === 0);
console.log(value);