const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

// function countHours(year, holidays) {
//     const dates = holidays.map(item => `${item}/${year}`);
//     const days = dates.reduce((hours, date) => {
//         const day = new Date(date).getDay();
//         return day !== 6 && day !== 0 ? hours + 2 : hours;
//     },0);
//     return days;
// }

function countHours(year, holidays) {
    return holidays.reduce((hours, date) => {
        const day = new Date(date+ "/" + year).getDay();
        return day >=1 && day <= 5 ? hours + 2 : hours;
    },0);
}

// function countHours(year, holidays) {
//     let hours = 0;
//     holidays.forEach(date => {
//         const day = new Date(date+ "/" + year).getDay();
//         if (day >=1 && day <= 5) {
//             hours+=2;
//         }
//     });
//     return hours;
// }

console.log(countHours(year, holidays)); // 2 días -> 4 horas extra en el año