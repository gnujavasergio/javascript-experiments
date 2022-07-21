let product1 = {
    id: 680,
    name: "HL Road Frame - Black, 58",
    code: "FR-R92B-58",
    color: "Black",
    cost: 1059.31,
    price: 1431.50,
    benefit: function () {
        return (this.price - this.cost).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
};

let product2 = {
    cost: 350,
    price: 800
}

console.log("Call: this hace referencia al objeto product1")
console.log(product1);
console.log(product1.benefit.call(product1));
console.log("Call: this hace referencia al objeto product2")
console.log(product2);
console.log(product1.benefit.call(product2));
console.log("");
console.log("Apply: this hace referencia al objeto product1")
console.log(product1.benefit.apply(product1));
console.log("Apply: this hace referencia al objeto product2")
console.log(product1.benefit.apply(product2));