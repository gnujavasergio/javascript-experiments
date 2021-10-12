function responseGreet(firstName, lastName, isDev) {
    console.log(`Buen dia, ${firstName} ${lastName}`);
    if (isDev) {
        console.log('Genial');
    }
}

function greet(firstName, lastName, isDev, callback) {
    console.log(`Hola, me llamo ${firstName} ${lastName} y soy un Desarrollador`);
    if (callback) {
        callback(firstName, lastName, isDev);
    }
}

greet('Sergio', 'Ochoa', true, responseGreet);