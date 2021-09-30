// Objetos

var devSergio = {
    username: 'gnujavasergio', // key:value
    firstName: 'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    phone: '71111111',
    isPro: true,
    age: 33,
    fullName: function () { // Metodo del un objeto(Funcion dentro de un objeto
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

console.log(`Usuario: ${devSergio.username}`);
console.log(`Telefono: ${devSergio.phone}`);
devSergio.fullName();