const MAJOR_AGE = 18;

const majorAge = age => age >= MAJOR_AGE;

// Asignar una variable a una funcion
const showAge = person => {
    if (majorAge(person.age)) {
        console.log(`${person.fullName()} es mayor de edad`);
    } else {
        console.log(`${person.fullName()} no es mayor de edad`);
    }
}

let sergio = {
    firstName: 'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    age: 33,
    fullName: function () { // Metodo del un objeto(Funcion dentro de un objeto
        return `${this.firstName} ${this.lastName}`;
    }
};
showAge(sergio);

let percy = {
    firstName: 'Angel',
    lastName: 'Martinez',
    age: 9,
    fullName: function () { // Metodo del un objeto(Funcion dentro de un objeto
        return `${this.firstName} ${this.lastName}`;
    }
};
showAge(percy);