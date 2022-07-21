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

let newProducts = [...products];

newProducts[0].id = 999;

console.log("Tienen el mismo id porque la copia del nuevo array de objectos se realiza por referencia.");
console.log(products[0].id);
console.log(newProducts[0].id);
