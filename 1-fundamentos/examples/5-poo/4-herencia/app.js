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
    constructor(firstName, lastName, height, favoriteLanguage, skills) {
        super(firstName, lastName, height);
        this.favoriteLanguage = favoriteLanguage;
        this.skills = skills;
    }

    greet() {
        console.log(`Hola, me llamo ${this.firstName} ${this.lastName} y soy un Desarrollador`);
    }

    printSkill(){
        console.log()
        for (const skill of this.skills) {
            console.log(skill);
        }
    }
}

let sergio = new Person('Sergio Antonio', 'Ochoa Martinez', 1.175);
sergio.greet();
console.log(sergio.imTall());

let rocio = new Person('Rocio', 'Paredes', 1.65);
rocio.greet();
console.log(rocio.imTall());

let devSergio = new Developer('Sergio', 'Ochoa', 1.75, 'java', ['java','javascript','php']);
devSergio.greet();
devSergio.printSkill();
console.log(devSergio.imTall());