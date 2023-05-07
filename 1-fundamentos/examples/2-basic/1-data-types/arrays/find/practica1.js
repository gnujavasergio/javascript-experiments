const numbers = [1, 30, 41, 29, 50, 60];

let respuesta = undefined
let rtaIndex = -1;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        rtaIndex = i;
        break
    }
}
console.log('for', respuesta);
console.log('index', rtaIndex);

let number = numbers.find(element => element >= 40);
let index = numbers.findIndex(element => element >= 40);
console.log('find', number);
console.log('findIndex', index);