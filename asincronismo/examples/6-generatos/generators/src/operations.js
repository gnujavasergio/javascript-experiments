function* operations(a, b) {
    yield a + b;
    yield a - b;
    yield a * b;
    yield a / b;
    yield a % b;
}

const gen = operations(4, 2);
console.log(`Suma: ${gen.next().value}`);
console.log(`Resta: ${gen.next().value}`);
console.log(`Multiplicación: ${gen.next().value}`);
console.log(`División: ${gen.next().value}`);
console.log(`Modulo: ${gen.next().value}`);