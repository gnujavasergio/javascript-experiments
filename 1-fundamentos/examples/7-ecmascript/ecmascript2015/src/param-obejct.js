let firstName = 'Sergio';
let lastName = 'Ochoa';
let age = 34;
let country = 'BO';

// ES5
devSergio = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    country: country
};
console.log(devSergio);

// ES6
devOchoa = {firstName, lastName, age, country};
console.log(devOchoa);