export default class Student {
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
