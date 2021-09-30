function extendFrom(prototypeChild, prototypeParent) {
    var fn = function () {
    }; // funcion anonima
    fn.prototype = prototypeParent.prototype;
    prototypeChild.prototype = new fn;
    prototypeChild.prototype.constructor = prototypeChild;
}

function Person(firstName, lastName, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
}

Person.prototype.greet = function () {
    console.log(`Hola, me llamo ${this.firstName} ${this.lastName}`);
}

Person.prototype.imTall = function () {
    return this.height > 1.80;
}

function Developer(firstName, lastName, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
}

// Funcion de herencia
extendFrom(Developer, Person);

Developer.prototype.greet = function () {
    console.log(`Hola, me llamo ${this.firstName} ${this.lastName} y soy un Desarrollador`);
}

// En esta arrow function el this es Window
Person.prototype.imTall = () => this.height > 1.80;
Person.prototype.imTall = function () {
    return this.height > 1.80;
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