
async function* findById() {
    let id = 1;
    while (true) {
        yield  Promise.resolve(1);
    }
}

const find = findById();
find.next().then(response => console.log(response.value));
find.next().then(response => console.log(response.value));
find.next().then(response => console.log(response.value));
find.next().then(response => console.log(response.value));