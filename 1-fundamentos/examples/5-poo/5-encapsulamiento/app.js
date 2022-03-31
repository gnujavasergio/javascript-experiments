class Country {
    constructor(name, code) {
        this.name = code;
        this._name = name;
        this._code = code;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }
}

class Address {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

class Person {
    constructor(firstName, lastName, height, country, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.country = country;
        this.address = address;
    }

    greet() {
        console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`);
    }

    imTall() {
        return this.height > 1.80;
    }
}

let bolivia = new Country('Bolivia', 'BO');

let addressSergio = new Address('Junin', 546);
let sergio = new Person('Sergio Antonio', 'Ochoa Martinez', 1.75, bolivia, addressSergio);
sergio.greet();
console.log(sergio.imTall());
console.log(sergio)

let rocio = new Person('Rocio', 'Paredes', 1.65, bolivia);
rocio.greet();
console.log(rocio.imTall());

let angel = new Person('Angel', 'Martinez', 1.92, bolivia);
angel.greet();
console.log(angel.imTall());