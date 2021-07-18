var person = {
    firstName: 'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    age: 33,
    isPro: true,
    strongman: true,
    engineer: true,
    singer: false,
    dj: false,
    fullName: function () { // Metodo del un objeto(Funcion dentro de un objeto
        return `${this.firstName} ${this.lastName}`;
    }
};
// Que profesiones tiene
console.log(`${person.fullName()} es:`);
if (person.strongman) {
    console.log('Strongman')
} else {
    console.log('No es Strongman');
}

if (person.engineer) {
    console.log('Ingeniero')
} else {
    console.log('No es Ingeniero');
}

if (person.singer) {
    console.log('Cantante')
} else {
    console.log('No es cantante');
}

if (person.dj) {
    console.log('DJ')
} else {
    console.log('No es DJ');
}
// Mayor de edad
if (person.age >= 18) {
    console.log(`${person.fullName()} es mayor de edad`);
} else {
    console.log(`${person.fullName()} no es mayor de edad`);
}
