function fullName() {
    let firstName = 'Sergio';
    firstName = 'Rocio'; // Correcto: Se puede reasignar en el mismo scope
    // let firstName = 'hola'; // error: No se puede redeclarar en el mismo scope
    if (true) {
        let firstName = 'Sergio'; // Correcto:
        console.log(firstName);
    }
}

fullName();
