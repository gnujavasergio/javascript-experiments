// Función sin parametros
function functionWithoutParams() {
    console.log(`
        Javascript
    `);
}
functionWithoutParams();

// Función con parametros
function functionWithParams(firstName, lastName, language) {
    console.log(`
        Nombre: ${firstName} ${lastName}
        Lenguaje Favorito: ${language}
    `);
}
functionWithParams('Sergio Antonio', 'Ochoa Martinez', 'Java');

// Función con retorno
function functionWithReturn(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(`Nombre completo ${functionWithReturn('Sergio', 'Ochoa')}`)