// Desestructuración
let developer = {
    'firstName': 'Sergio',
    'lastName': 'Ochoa',
    'age': 33,
    'country': 'BO'
}

// es5
console.log(developer.firstName, developer.lastName, developer.age, developer.country);

// ES6
let {firstName, lastName, age, country} = developer;
console.log(firstName, lastName, age, country);


let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let [monday, tuesday, wednesday] = days;
console.log(monday, tuesday, wednesday)