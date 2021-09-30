
// Es posible utilizar el mismo nombre para una variable global
// y para el parametro de una función con el alcance local
var name = 'Sergio';

function printUpper(name) {
    name = name.toUpperCase();
    console.log('Variable local: ' + name);
}

console.log('Variable global: ' + name);
printUpper(name);