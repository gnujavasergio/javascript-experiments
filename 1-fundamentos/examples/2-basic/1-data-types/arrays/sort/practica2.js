const numbers = [1, 30, 4, 21, 100000];
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b)); // asc
console.log(numbers.sort((a, b) => b - a)); // desc

