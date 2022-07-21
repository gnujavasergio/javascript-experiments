let price = 200;
let result = 100;

console.log("price = " + price.toString());
console.log("result = " + result.toString());
console.log("");

// Equal to
console.log("price == price = " + (price == price).toString());

// Equal to
let value = price.toString();
console.log("price(number) == price(string) = " + (price == value).toString());

// Equal to/Equal type
console.log("price(number) === price(number) = " + (price === price).toString());

// Equal to/Equal type
value = price.toString();
console.log("price(number) === price(string) = " + (price === value).toString());
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

