let age = Symbol('age');
let phone = Symbol('phone');

let devSergio = {
    username: 'gnujavasergio', // key:value
    firstName: 'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    [phone]: '71111111',
    isPro: true,
    [age]: 33,
    fullName: function () { // Metodo del un objeto(Funcion dentro de un objeto
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

console.log(devSergio);
console.log("PropertyNames");
console.log(Object.getOwnPropertyNames(devSergio));
console.log("PropertySymbols");
console.log(Object.getOwnPropertySymbols(devSergio));

console.log(`username property: ${devSergio.hasOwnProperty('username')}`);
console.log(`age property: ${devSergio.hasOwnProperty('age')}`);

console.log(devSergio[age]);
console.log(devSergio[phone]);

devSergio[phone] = '73418367';
devSergio[age] = 35;
console.log(devSergio);