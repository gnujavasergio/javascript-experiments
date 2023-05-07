'use strict'

// Uso stricto en una variable global
pi = 3.1416;
console.log(pi);

// Uso stricto en una funcion
function myfunction() {
    'use strict';
    pi = 3.1416;
    console.log(pi);
}
myfunction();