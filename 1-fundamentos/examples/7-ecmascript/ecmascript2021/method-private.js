class MethodPrivate {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    #fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    show(){
        this.#fullName();
    }
}

let sergio = new MethodPrivate('Sergio', 'Ochoa');
// No se puede acceder porque es un metodo privado
// sergio.fullName();
sergio.show();