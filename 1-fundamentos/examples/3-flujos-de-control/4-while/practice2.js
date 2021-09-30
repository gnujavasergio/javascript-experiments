let contador = 0;

const llueve = () => Math.random() < 0.25;
do {
    contador++;
} while (!llueve());
let text = 'veces';
if (contador === 1) {
    text = 'vez';
}

console.log(`Fui a ver si llovia ${contador} ${text}`);