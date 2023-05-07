let now = new Date();
console.log(now);

let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

console.log(`Año: ${year}, Mes: ${month}, Dia: ${day}`);

let birthDaySergio = new Date(1987, 7, 29);
console.log(birthDaySergio);

let bithDayRocio = new Date('march 17 1988');
console.log(bithDayRocio);