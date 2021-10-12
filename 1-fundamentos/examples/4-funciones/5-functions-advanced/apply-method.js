let person1 = {name: 'Sergio', age: 34};

function introduction(profession, country) {
    console.log(`Mi nombre es ${this.name} y soy un ${profession} de ${country}`)
}
introduction.apply(person1, ['Ing. de Sistemas', 'Bolivia']);
introduction.call(person1, 'Ing de Sistemas', 'Bolivia');