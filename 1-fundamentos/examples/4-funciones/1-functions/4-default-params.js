// Parametros por defecto
// ES5
function  printES5(fullName, age, proffesion) {
    fullName = fullName || 'Sergio';
    age = age || 33;
    proffesion = proffesion || 'Student'
    console.log(fullName, age, proffesion);
}

// ES6 O ECMAScript 2015
function printES6(fullName = 'Sergio', age = 33, proffesion = 'Student') {
    console.log(fullName, age, proffesion);
}

printES6();
printES6('Ochoa', 33, 'Engineer');
