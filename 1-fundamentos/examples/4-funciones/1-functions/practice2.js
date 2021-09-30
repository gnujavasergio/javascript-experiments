const MAJOR_AGE = 18;

function majorAge(age) {
    return age >= MAJOR_AGE;
}

function showAge(person) {
    if (majorAge(person.age)) {
        console.log(`${person.fullName()} es mayor de edad`);
    } else {
        console.log(`${person.fullName()} no es mayor de edad`);
    }
}

var sergio = {
    firstName: 'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    age: 33,
    fullName: function () { // Metodo del un objeto(Funcion dentro de un objeto
        return `${this.firstName} ${this.lastName}`;
    }
};
showAge(sergio);

var percy = {
    firstName: 'Angel',
    lastName: 'Martinez',
    age: 9
};
showAge(percy);