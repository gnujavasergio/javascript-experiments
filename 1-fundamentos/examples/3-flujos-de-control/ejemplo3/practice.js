const GRAMOS = 0.02;

let sergio = {
    firstName: 'Sergio',
    lastName: 'Ochoa',
    age: 33,
    weight: 90,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(`Al inicio del año ${sergio.firstName} pesa ${sergio.weight} KG`);

const upWeight = person => person.weight += GRAMOS;
const downWeight = person => person.weight -= GRAMOS;

for (let i = 1; i <= 365; i++) {
    let random = Math.random();
    if (random < 0.25) {
        upWeight(sergio);
    } else if (random < 0.5) {
        downWeight(sergio);
    }
}

console.log(`Al final del año ${sergio.fullName()} pesa ${sergio.weight.toFixed(2)} KG`);