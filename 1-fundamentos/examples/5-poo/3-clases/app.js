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

let sergio = new Person('Sergio Antonio', 'Ochoa Martinez', 1.75);
sergio.greet();
console.log(sergio.imTall());

let rocio = new Person('Rocio', 'Paredes', 1.65);
rocio.greet();
console.log(rocio.imTall());

let angel = new Person('Angel', 'Martinez', 1.92);
angel.greet();
console.log(angel.imTall());