function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Sergio', 'Rocio', 'Daniel', 'Angel', 'Johel']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
