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
        cost: 13,
        price: 34,
    },
    {
        id: 3,
        name: 'Polera',
        color: 'Blanco',
        cost: 4,
        price: 9,
    },
];

for (const product of products) {
    if (product.cost < 20) {
        break;
    }
    console.log(JSON.stringify(product));
}