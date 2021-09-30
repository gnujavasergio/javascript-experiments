function* greet(name) {
    yield 'Hola';
    yield name;
}

const generatorGreet = greet('Sergio');

console.log(generatorGreet.next().value);
console.log(generatorGreet.next().value);