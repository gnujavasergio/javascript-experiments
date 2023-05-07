// Arrays
var languages = ['Java', 'JavaScript', 'Kotlin', 'NodeJS', 'TypeScript', 'Dart', 'PHP', 'Python'];
console.log(languages);
console.log(languages.length); // length es una propiedad del array

// Acceder por indice a un elemento del array
console.log(languages[0]);

// Metodos
// Para añadir un elemento al final
languages.push('Rust');
console.log(languages);

// Eliminar elemento del final
languages.pop('Rust');
console.log(languages);

// Añadir elemento al inicio
languages.unshift('C++')
console.log(languages);

// Eliminar elemento al inicio
languages.shift('C++');
console.log(languages);

// Devuelve la posicion de un elemento del array
var position = languages.indexOf('JavaScript');
console.log(position);

// Metodos para recorrer arrays
var products = [
    {name: 'Bici', price: 3000},
    {name: 'TV', price: 2500},
    {name: 'Libro', price: 320},
    {name: 'Celular', price: 10000},
    {name: 'laptop', price: 20000},
    {name: 'teclado', price: 500},
    {name: 'audifonos', price: 1700}
]

// Metodos para recorrer arrays

// Filter
// - Valida si es true o false para crear un nuevo array
// - Este metodo no modifica el array original
var productsFilter = products.filter(function (product) {
    return product.price < 700;
});
console.log('-----Filter-----')
console.log(productsFilter);

// Map
var productsMap = products.map((product) => product.name);
console.log('-----Map-----');
console.log(productsMap);

// Find
// - Valida si es true y false para encontrar un elemente en el array
// - Si lo encuentra devuelve un dato sino no pasa nada
var productSearch = products.find(function (product) {
    return product.name === 'Laptop';
});

// foreach
// - Solo sirve para recorrer el array donde se podria validar, buscar, mapear o crear otro array
products.forEach(function (product) {
    console.log(product.name);
});

// some
// Este método nos regresa false o true para validar si hay o no productos que cumplan la validación
var productCheap = products.some(product => product.price <= 700);
console.log(`Existen productos baratos: ${productCheap}`);

// every
// Valida que todos los elementos del array cumplan con la condicion
// Retorna true o false
var productCheaps = products.every(function (product) {
    return product.price <= 700;
});
console.log(`Todos son productos baratos: ${productCheaps}`);

// reduce
// Recorre cada elemento del array para empezar a realizar una sumatoria
var totalPrice = products.reduce(function (currentTotal, product) {
    return product.price + currentTotal;
});
console.log('Costo total: ' + totalPrice);

// includes
// Metodo que devuelve true o false si existe el elemento en el array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var existNumber = numbers.includes(2);
console.log('Existe numero 2: ' + existNumber);