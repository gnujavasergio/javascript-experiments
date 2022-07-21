function days(...days) {
    console.log(days);
}

days('Lunes', 'Martes', 'Miercoles');
let args = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
days(...args);
