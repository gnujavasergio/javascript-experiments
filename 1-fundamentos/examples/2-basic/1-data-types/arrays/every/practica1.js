const numbers = [1, 2, 3, 4, 49, 29, 10, 13];

let menores = true;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number <= 40) {
        menores = false;
    }
}
console.log(menores);

const value = numbers.every(number => number <= 40);
console.log(value);