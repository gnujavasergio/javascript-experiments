window.name ='SERGIO';
let person = {
    name: 'Sergio',
    regularFunction: function () {
        console.log(this);
        console.log(`Hola ${this.name}`); // this hace referencia al objeto actual
    },
    arrowFunction: () =>  console.log(`Hola ${this.name}`) // this hace referencia al contexto global y no al objeto
}

person.regularFunction();
person.arrowFunction();
console.log(this);


let student = {
    name: 'Sergio',
    regularFunction: function () {
        console.log(this);
        console.log(`Hola ${this.name}`);
    },
    arrowFunction: (student) =>  console.log(`Hola ${student.name}`)
}

student.regularFunction();
student.arrowFunction(student);