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

let newProducts = [
    {
        id: 4,
        name: 'Polera',
        colors: ['Blanco'],
        cost: 1250.50,
        price: 1500,
    },
    {
        id: 5,
        name: 'Corto',
        color: ['Rojo', ' blanco'],
        cost: 1250.50,
        price: 1500,
    },
    {
        id: 6,
        name: 'Polera',
        color: 'Blanco',
        cost: 1250.50,
        price: 1500,
    },
];

let allProducts = products.concat(newProducts);
console.log(allProducts.length);

let withSpreadOperatorProducts = [...products, ...newProducts];
console.log(withSpreadOperatorProducts.length);
