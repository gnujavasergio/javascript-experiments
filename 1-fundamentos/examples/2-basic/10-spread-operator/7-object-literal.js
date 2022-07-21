let product1 = {
    id: 1,
    name: 'Polera',
    colors: ['Blanco'],
    cost: 1250.50,
    price: 1500,
};

let product2 = {...product1};

product2.id = 2;

console.log(product1);
console.log(product2);