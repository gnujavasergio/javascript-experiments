let product = {
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

console.log(product.benefit());