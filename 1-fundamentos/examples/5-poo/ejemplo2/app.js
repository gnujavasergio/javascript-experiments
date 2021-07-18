class Person {
    constructor(firstName, lastName, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
    }

    greet() {
        console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`);
    }

    imTall() {
        return this.height > 1.80;
    }
}

class Developer extends Person {
    constructor(firstName, lastName, height, favoriteLanguage) {
        super(firstName, lastName, height);
        this.favoriteLanguage = favoriteLanguage;
    }

    greet() {
        console.log(`Hola, me llamo ${this.firstName} ${this.lastName} y soy un Desarrollador`);
    }
}

let sergio = new Person('Sergio Antonio', 'Ochoa Martinez', 1.175);
sergio.greet();
console.log(sergio.imTall());

let rocio = new Person('Rocio', 'Paredes', 1.65);
rocio.greet();
console.log(rocio.imTall());

let angel = new Person('Angel', 'Martinez', 1.92);
angel.greet();
console.log(angel.imTall());

let devSergio = new Developer('Sergio', 'Ochoa', 1.75);
devSergio.greet();
console.log(devSergio.imTall());