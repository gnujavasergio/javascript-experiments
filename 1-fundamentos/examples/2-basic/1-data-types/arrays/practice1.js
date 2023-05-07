let sergio = {
    firstName: 'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    height: 1.74,
    books: 150
}

let rocio = {
    firstName: 'Rocio',
    lastName: 'Paredes',
    height: 1.65,
    books: 100
}

let daniel = {
    firstName: 'Daniel',
    lastName: 'Sanchez',
    height: 1.70,
    books: 200
}

let angel = {
    firstName: 'Angel',
    lastName: 'Martinez',
    height: 1.92,
    books: 130
}

let julio = {
    firstName: 'Julio',
    lastName: 'Martinez',
    height: 1.88,
    books: 180
}

// Filter
const BIG = 1.8;
let persons = [sergio, rocio, daniel, angel];

let bigPersons1 = persons.filter(person => person.height > BIG);
console.log(bigPersons1);

const isHeight = person => person.height > BIG;
let bigPersons2 = persons.filter(isHeight);
console.log('Personas Grandes')
console.log(bigPersons2);

const SMALL = 1.6;
let smallPersons = persons.filter(person => person.height < SMALL);
console.log('Personas pequeñas')
console.log(smallPersons);

// Map
const cmPerson = person => {
    // let cmHeight = person.height *= 100;
    return {
        ...person,
        height: person.height *= 100
    };
}

console.log('Altura en metros');
console.log(persons);

let cmPersons = persons.map(cmPerson);
console.log("Altunra en centimetros");
console.log(cmPersons);

// reduce
const amountBooks = persons.reduce((amount, person) => amount + person.books, 0);
console.log(`Èn total todos tiene ${amountBooks} libros`);