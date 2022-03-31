let products = [
    {
        id: 680,
        name: "HL Road Frame - Black, 58",
        code: "FR-R92B-58",
        color: "Black",
        cost: 1059.31,
        price: 1431.50
    },
    {
        id: 707,
        name: "Sport-100 Helmet, Red",
        code: "HL-U509-R",
        color: "Red",
        cost: 13.08,
        price: 34.99
    },
    {
        id: 709,
        name: "Mountain Bike Socks, M",
        code: "SO-B909-M",
        color: "White",
        cost: 3.3963,
        price: 9.50
    }
];

let product = products[0];
let introDate = new Date();
let strValue = new String();
let isActive = false;
let result;
let value = null;

function typeofSample() {
    console.log("Ejemplo");
}

console.log("products = " + typeof products);
console.log("product = " + typeof product);
console.log("product.id = " + typeof product.id);
console.log("product.code = " + typeof product.code);
console.log("strValue = " + typeof strValue);
console.log("introDate = " + typeof introDate);  // Dates are objects
console.log("isActive = " + typeof isActive);
console.log("result = " + typeof result);
console.log("value = " + typeof value);
console.log("typeofSample() = " + typeof typeofSample());
