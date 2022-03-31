const fullName = (firstName, lastName) => {
    const name = `${firstName} ${lastName}`;
    console.log(name);
}
fullName('Sergio', 'Ochoa');

var scope = "I am global";

const functionScope = () => {
    var scope = 'I am just a local'; // Esta variable no se remplazara a la variable global
    const func = () => {
        return scope;
    }
    console.log(func());
}
functionScope();
console.log(scope);