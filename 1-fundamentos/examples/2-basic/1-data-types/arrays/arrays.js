// Arrays
var languages = ['Java', 'JavaScript', 'Kotlin', 'NodeJS', 'TypeScript', 'Dart', 'PHP', 'Python'];
console.log(languages);
console.log(languages.length); // length es una propiedad del array
console.log(typeof languages); // object

// Acceder por indice a un elemento del array
console.log(languages[0]);

// Metodos
// Para añadir un elemento al final
languages.push('Rust');
console.log(languages);

// Eliminar elemento del final
languages.pop('Rust');
console.log(languages);

// Añadir elemento al inicio
languages.unshift('C++')
console.log(languages);

// Eliminar elemento al inicio
languages.shift('C++');
console.log(languages);

// Devuelve la posicion de un elemento del array
var position = languages.indexOf('JavaScript');
console.log(position);

let days = new Array(6);
days.push("Lunes");
console.log(days);
console.log(typeof days); // object