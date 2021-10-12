let numbers = [1, 2, 3, 4, 5]
console.log(numbers.flatMap(value => [value, value * 2, value * 3, value * 4]))