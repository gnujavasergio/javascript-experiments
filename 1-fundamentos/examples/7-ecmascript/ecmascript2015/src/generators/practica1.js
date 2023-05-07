function* getId() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);