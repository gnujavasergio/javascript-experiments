class Person {
    constructor(firstName, lastName, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
    }

    greet(callback) {
        let {firstName, lastName} = this;
        console.log(`Hola, me llamo ${firstName} ${lastName}`);
        if (callback) {
            callback(firstName, lastName);
        }
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

    greet(callback) {
        let {firstName, lastName} = this;
        console.log(`Hola, me llamo ${firstName} ${lastName} y soy un Desarrollador`);
        if (callback) {
            callback(firstName, lastName, true);
        }
    }
}

function responseGreet(firstName, lastName, isDev) {
    console.log(`Buen dia, ${firstName} ${lastName}`);
    if (isDev) {
        console.log('Genial');
    }
}

let sergio = new Person('Sergio Antonio', 'Ochoa Martinez', 1.175);
sergio.greet();
console.log(sergio.imTall());

let rocio = new Person('Rocio', 'Paredes', 1.65);
rocio.greet(responseGreet);
console.log(rocio.imTall());

let angel = new Person('Angel', 'Martinez', 1.92);
angel.greet();
console.log(angel.imTall());

let devSergio = new Developer('Sergio', 'Ochoa', 1.75);
devSergio.greet(responseGreet);
console.log(devSergio.imTall());