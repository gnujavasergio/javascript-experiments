let person = {
    firstName: 'Sergio',
    lastName:'Ochoa',
    age: 29,
    'hair color': 'Black' // Solo se puede acceder con corchetes
}

// Formas de acceder a las propiedades de un objeto.
console.log(person.firstName);
console.log(person['firstName']);

console.log(person['hair color']);
const propertyName = 'hair color';
console.log(person[propertyName]);

// Recorrer un objeto
for (let propertyName in person) {
    console.log( `${propertyName}: ${person[propertyName]}`);
}

// Como describir una propiedad
console.log(Object.getOwnPropertyDescriptor(person, 'firstName'));
console.log(Object.getOwnPropertyDescriptors(person));

// Property writable modificar
Object.defineProperty(person, 'firstName', {writable: false});
person.firstName = 'Antonio';
console.log(Object.getOwnPropertyDescriptor(person, 'firstName'));
