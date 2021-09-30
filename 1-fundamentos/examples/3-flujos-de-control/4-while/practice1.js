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

const eatLot = () => Math.random() < 0.3; // come mucho
const playSport = () => Math.random() < 0.4; // realiza deporte

let days = 0;
const META = sergio.weight - 3;

while (sergio.weight > META) {
    if (eatLot()) {
        upWeight(sergio)
    }
    if(playSport()) {
        downWeight(sergio)
    }
    days++;
}

console.log(`Pasaron  ${days}  dias hasta que ${sergio.fullName()} adelgazo 3KG`);