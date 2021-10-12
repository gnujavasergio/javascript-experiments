class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ref = new WeakRef(firstName, lastName);
    }

    #fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    show() {
        this.#fullName();
    }
}

let sergio = new Student('Sergio', 'Ochoa');
// No se puede acceder porque es un metodo privado
// sergio.fullName();
sergio.show();