const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const vector = [];
for(let i = 0; i < matrix.length; i++) {
    const array = matrix[i];
    for(let j = 0; j < array.length; j++) {
        const element = array[j];
        vector.push(element);
    }
}
console.log(vector);

const array = matrix.flat(); // default profundidad 1
console.log(array);