function* greet(name) {
    yield 'Hola';
    yield name;
}

const generatorGreet = greet('Sergio');

console.log(generatorGreet.next().value);
console.log(generatorGreet.next().value);
console.log('---------------------');
function* iterate(array = []){
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Sergio', 'Rocio', 'Angel', 'Daniel', 'Johel']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);