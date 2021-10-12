let person1 = {name: 'Sergio', age: 34};
let person2 = {name: 'Rocio', age: 33};

let greet = function () {
    console.log('Hi, ' + this.name);
}

greet.call(person1);
greet.call(person2);

let greet1 = function (message) {
    console.log(`${message} , ${this.name}`);
}

greet1.call(person1, 'HI');