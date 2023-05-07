let fullName = ' Sergio Antonio Ochoa Martinez ';
console.log(fullName);

// trim: quitar los espacios de los extremos
fullName = fullName.trim();
console.log(fullName);

// toLowerCase: para convertir todo el texto a minuscula
fullName = fullName.toLowerCase();
console.log(fullName);

// search: Para buscar una palabra en un texto si lo encuentra devuelve la posicion sino -1
let indexSearch = fullName.search("ochoa");
console.log(indexSearch);

// startsWith: Para saber si una cadena de texto comienza con los caracteres de un texto en concreto.
let start = fullName.startsWith("s");
console.log(`startsWidth() ${start}`);

// startsWith: Para saber si una cadena de texto termina con los caracteres de un texto en concreto.
let end = fullName.endsWith("z");
console.log(`endsWidth() ${end}`);

// includes: Para saber si se incluye un determinado elemento, retorna true o false
let includeBool = fullName.includes("martinez");
console.log(`includes(): ${includeBool}`);
