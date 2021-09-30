function greeting() {
    let message = 'Hello'; // variable en el scope de la funcion
}

greeting();
console.log(message);

Solucion
let message = 'HELLO';
function greeting() {
    let message = 'Hello'; // variable en el scope de la funcion
    console.log(message);
}

greeting();
console.log(message);


