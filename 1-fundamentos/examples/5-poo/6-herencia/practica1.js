// Herencia de constructor parametro como objecto.
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

class Developer extends Person {
    constructor({firstName, lastName, height, favoriteLanguage, skills}) {
        super({firstName, lastName, height});
        this.favoriteLanguage = favoriteLanguage;
        this.skills = skills;
    }

    greet() {
        console.log(`Hola, me llamo ${this.firstName} ${this.lastName} y soy un Desarrollador`);
    }

    printSkill() {
        console.log()
        for (const skill of this.skills) {
            console.log(skill);
        }
    }
}

let sergio = new Person({firstName: 'Sergio Antonio', lastName: 'Ochoa Martinez', height: 1.175});
sergio.greet();
console.log(sergio.imTall());

let rocio = new Person({firstName: 'Rocio', lastName: 'Paredes', height: 1.65});
rocio.greet();
console.log(rocio.imTall());

let devSergio = new Developer({
    firstName: 'Sergio',
    lastName: 'Ochoa',
    height: 1.75,
    favoriteLanguage: 'java',
    skills: ['java', 'javascript', 'php']
});
devSergio.greet();
devSergio.printSkill();
console.log(devSergio.imTall());