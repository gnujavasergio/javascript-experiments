// Spread Operator
// ES6
let team1 = ['Sergio', 'Angel', 'Daniel'];
let team2 = ['Jhoel', 'Diego', 'Julio'];

let famlily = ['Percy', 'Maxi', ...team1, ...team2]
console.log(famlily);

// Spread Operator con objetos
let person = {
    name: 'Sergio',
    age: 45
};
let country = 'BO';
let data = {id: 1, ...person, country};
console.log(data);

// Copiar arrays
// Forma incorrecta
const originalArray = [1, 2, 3, 4, 5];
const copyArray = originalArray; // Esta expresion realiza una referencia al array original
copyArray[0] = 0
console.log(originalArray); // se copio
console.log(originalArray === copyArray);  // true

// forma correcta con spread operator
const array1 = [1, 2, 3];
const number = 4;
const array2 = [5, 6, 7];
const otherArray = [...array1, number, ...array2];
console.log(otherArray); // [1,2,3,4,5,6,7]

// Parametro rest con funciones
function sum(number, ...numbers) {
    console.log(number);
    console.log(numbers);
}

// Con desestructuración
const dev = {
    name: 'Sergio',
    age: 35,
    courses: ['Curso de Java', 'Curso de JavaScript']
}
const {courses, ...user} = dev;
console.log(courses, user);

const enteros = [0, 1, 2, 3, 4];
const [cero, positivos] = enteros;
console.log(cero, positivos);