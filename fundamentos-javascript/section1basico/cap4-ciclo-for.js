const nombre = 'Sergio'
const dias  = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]

function correr(){
    const min = 5;
    const max = 15;
    return Math.round(Math.random() * (max -min)) + min;
}

let totalKms = 0;
const length = dias.length
for(let i = 0; i < length; i++){
    const kms = correr()
    totalKms += kms;
    console.log(`El día ${dias[i]} ${nombre} corrió ${kms} kms`);    
}

const promedioKms = totalKms / length
// toFixed(2) para sacar una cantidad expecifica de numeros decimales
console.log(`En promedio, ${nombre} corrio ${promedioKms.toFixed(2)} kms`)