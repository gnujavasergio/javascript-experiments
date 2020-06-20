// Scope Global puede ser accedido en toda la aplicacion
var firstName = "Sergio"; 

function fullName() {
    // Scope Local solo puedo ser accedido solo en la funcion
    var lastName = "Ochoa";
    return firstName + " " + lastName;    
}

fullName(); // Sergio Ochoa

console.log(fistName); // Correcto
console.log(lastName); // Incorrecto Sale error lastName is not defined