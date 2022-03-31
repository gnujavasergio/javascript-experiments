const showDays = () => {
    var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    if(true) {
        var lunes = days[0]; // Podra se accedido en todo el scope de la funcion
        let martes = days[1]; // Podra se accedido solo en el block
        const miercoles = days[2]; // Podra se accedido solo en el block
        console.log(martes); // Solucion
        console.log(miercoles); // Solucion
    }
    console.log(lunes);
    // console.log(martes); // Error
    // console.log(miercoles); // Error
}
showDays();

let sergio = 'let Sergio';
var rocio = 'var Rocio'
{
    let sergio = 'let SERGIO';
    var rocio = 'var ROCIO';
    console.log(sergio);
    console.log(rocio);
}
console.log(sergio);
console.log(rocio); // El valor asignado en `rocio` en el bloque se trasmitio a la variable global.

const showNumbers = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() =>  {
            console.log(i);
        }, 1000);
    }
}
showNumbers();