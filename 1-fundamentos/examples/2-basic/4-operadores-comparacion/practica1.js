var developer = {
    firstName: 'Sergio'
}

var desarrollador = {
    firstName: 'Sergio'
}

console.log(developer === desarrollador); // false hace referencia a otro objeto

var backend = developer;
console.log(developer === backend); // true hace referencia al mismo objeto

var frontend = {
    ...developer
};

console.log(developer === frontend); // false porque frontend es un objeto diferente