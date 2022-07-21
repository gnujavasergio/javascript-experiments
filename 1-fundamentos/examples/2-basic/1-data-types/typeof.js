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


// Using the constructor function
console.log("Using the constructor function");
console.log("products = " + products.constructor.toString());
console.log("product = " + product.constructor.toString());
console.log("product.id = " + product.id.constructor.toString());
console.log("product.productNumber = " + product.cost.constructor.toString());
console.log("introDate = " + introDate.constructor.toString());
console.log("strValue = " + strValue.constructor.toString());
console.log("isActive = " + isActive.constructor.toString());
console.log("typeofSample() = " + typeofSample.constructor.toString());

// Utilizar constructor para saber de que tipo es el objeto es
function isArray(value) {
    return value.constructor.toString().indexOf("Array") > -1;
    // or use: return value.constructor === Array;
}

function isDate(value) {
    return value.constructor.toString().indexOf("Date") > -1;
    // or use: return value.constructor === Date;
}

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

console.log("products is Array? = " + isArray(products));
console.log("introDate is Date? = " + isDate(introDate));
console.log("result = " + isNullOrUndefined(result) ? 'null/undefined' : result);
console.log("value = " + isNullOrUndefined(value) ? 'null/undefined' : value);


console.log("Operador instanceof");
let productMonitor = new Product(1, "Monitor",
    "FR-R92B-58", "Black", 1059.31, 1431.50);
let nowDate = new Date();
let name = new String("Product Name");
let firstName = "Sergio";

console.log("productMonitor instanceof Product = " + (productMonitor instanceof Product).toString());
console.log("productMonitor instanceof Object = " + (productMonitor instanceof Object).toString());
console.log("nowDate instanceof Date = " + (nowDate instanceof Date).toString());
console.log("nowDate instanceof Object = " + (nowDate instanceof Object).toString());
console.log("name instanceof String = " + (name instanceof String).toString());
console.log("name instanceof Object = " + (name instanceof Object).toString());
console.log("firstName instanceof String = " + (firstName instanceof String).toString());
console.log("firstName instanceof Object = " + (firstName instanceof Object).toString());

function Product(id, name, code, color, cost, price) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.color = color;
    this.cost = cost;
    this.price = price;
}