function greet(...names) {
    names.forEach(name => console.log('Hola ' + name));
}

greet('Sergio', 'Rocio', 'Angel');

function greet1(message, ...names) {
    names.forEach(name => console.log(message + ' ' + name));
}

greet1('Hi', 'Sergio', 'Rocio', 'Angel')