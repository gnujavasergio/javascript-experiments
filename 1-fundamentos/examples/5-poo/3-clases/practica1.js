// Clase con un objeto como parametro
class Person {
    constructor({firstName, lastName, height}) {
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

let sergio = new Person({firstName: 'Sergio Antonio', lastName: 'Ochoa Martinez', height: 1.175});
sergio.greet();
console.log(sergio.imTall());

let rocio = new Person({firstName: 'Rocio', lastName: 'Paredes', height: 1.65});
rocio.greet();
console.log(rocio.imTall());

let angel = new Person({firstName: 'Angel', lastName: 'Martinez', height: 1.92});
angel.greet();
console.log(angel.imTall());