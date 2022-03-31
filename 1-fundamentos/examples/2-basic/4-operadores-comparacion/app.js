let price = 200;
let result = 0;

console.log("price = " + price.toString());
console.log("");

// Equal to
console.log("price == price = " + (price == price).toString());

// Equal to
result = price.toString();
console.log("price(number) == result(string) = " + (price == result).toString());

// Equal to/Equal type
result = price;
console.log("price(number) === result(number) = " + (price === result).toString());

// Equal to/Equal type
result = price.toString();
console.log("price(number) === result(string) = " + (price === result).toString());
console.log("");

// Not Equal to
result = 100;
console.log("result = " + result.toString());
console.log("price(number) != result(number) = " + (price != result).toString());

// Not Equal to/Not equal type
result = price.toString();
console.log("price(number) !== result(string) = " + (price !== result).toString());
console.log("");

// Greater than
console.log("price > 10 = " + (price > 10).toString());

// Greater than or equal to
console.log("price >= price = " + (price >= price).toString());

// Less than
console.log("price < 1500 = " + (price < 1500).toString());

// Less than or equal to
console.log("price <= price = " + (price <= price).toString());


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