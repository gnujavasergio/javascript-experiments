function Product(id, name, code, color, cost, price) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.color = color;
    this.cost = cost;
    this.price = price;
    this.benefit = function () {
        return (this.price - this.cost).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
}

let product1 = new Product(1, 'Jeans', 'CR-113', 'Black', 1059.31, 1431.50);
console.log(product1.benefit());
let product2 = new Product(2, 'Polera', 'CR-114', 'Black', 300, 850);
console.log(product2.benefit());