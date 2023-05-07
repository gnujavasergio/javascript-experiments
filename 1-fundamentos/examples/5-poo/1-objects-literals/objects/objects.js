// Objetos
let devSergio = {
    username: 'gnujavasergio', // key:value
    firstName: 'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    phone: '71111111',
    isPro: true,
    age: 33,
    work: 10,
    fullName: function () { // Metodo del un objeto(Funcion dentro de un objeto
        console.log(`${this.firstName} ${this.lastName}`);
    },
    // Otra forma de declarar una funcion
    experience() {
        if (this.work >= 1 && this.work <= 2) {
            return 'Junior';
        } else if (this.work > 2 && this.work < 10) {
            return 'Semi Senior';
        } else {
            return 'Senior';
        }
    }
}

// Podemos añadir propiedades y funciones a un objeto litera
devSergio.skills = ['Java', 'JavaScript', 'PHP'];
devSergio.isAdult = function () {
    return this.age >= 18;
}

console.log(devSergio);
console.log(`Usuario: ${devSergio.username}`);
console.log(`Telefono: ${devSergio.phone}`);
devSergio.fullName();
console.log(`Es adulto: ${devSergio.isAdult()}`);
console.log(devSergio.experience());

// Function constructura con parametros
function developer(username, firstName, lastName, phone, isPro, age) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.isPro = isPro;
    this.age = age;
}

let devOchoa = new developer('sochoa', 'Sergio', 'Ochoa', '71111111', false, 33);
console.log(devOchoa);

// Funcion constructra con un objecto
function backend({username, firstName, lastName, phone, isPro, age}) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.isPro = isPro;
    this.age = age;
}

let devMartinez = new backend({
    username: 'amartinez',
    firstName: 'Angel',
    lastName: 'Martinez',
    phone: '71111111',
    isPro: true,
    age: 30
})
console.log(devMartinez);


function printUpperDeveloper(developer) {
    let username = developer.username.toUpperCase();
    // Desestructurar objectos: Obtener en variables los atributos del objeto
    let {firstName, lastName} = developer;
    console.log(username);
    console.log(`${firstName} ${lastName}`);
}
printUpperDeveloper(devOchoa);


function printUpperBackend({username, firstName, lastName, phone, isPro, age}) {
    let user = username.toUpperCase();
    console.log(user);
}

printUpperBackend(devOchoa);
printUpperBackend({username: 'angel'});

// Objetos mandados como parametro por Referencia
// Cambiar los valores del mismo objeto que se esta enviando
function printAge(developer) {
    developer.age += 1;
}
printAge(devOchoa); // age=34
console.log(devOchoa);
printAge(devOchoa); // age=35
console.log(devOchoa);

// Objetos mandados como parametro por valor
function birthday(developer) {
    return {
        ...developer,
        age: developer.age + 1
    }
}
let newDevSergio = birthday(devSergio);
console.log('----new Objet----')
console.log(newDevSergio);
console.log('----old Objet----')
console.log(devSergio);