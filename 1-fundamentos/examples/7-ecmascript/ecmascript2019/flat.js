let numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]; // Este array se puede aplanar hasta el nivl 2
console.log(numbers.flat(0)); // no aplana [ 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9 ] ] ]
console.log(numbers.flat(1)); // aplana 1 nivel [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
console.log(numbers.flat(2)); // aplana 2 niveles [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]