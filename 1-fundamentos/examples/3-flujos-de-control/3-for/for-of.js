let products = [
    {
        id: 1,
        name: 'Polera',
        colors: ['Blanco'],
        cost: 1250.50,
        price: 1500,
    },
    {
        id: 2,
        name: 'Corto',
        color: ['Rojo', ' blanco'],
        cost: 1250.50,
        price: 1500,
    },
    {
        id: 3,
        name: 'Polera',
        color: 'Blanco',
        cost: 1250.50,
        price: 1500,
    },
];

for (const product of products) {
    console.log(JSON.stringify(product));
}

// Interar un string
let productName = "Pelera de color rojo.";
let letters = "";

for (const char of productName) {
    letters += char;
}
console.log(letters);