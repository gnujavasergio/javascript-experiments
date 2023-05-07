// Las variables declaradas en la funcion solo pueden ser accedidas dentro de la funcion
const showDays = () => {
    var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    console.log(days[0]);
}
showDays();
// No se puede llamar a la variable days porque esta en el scope de la función.
// console.log(days);

const printNumbers = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // No se puede redeclarar en la mismo nombre de la variable.
    // let y = 2;
    console.log(x);
    console.log(y);
}
printNumbers();


