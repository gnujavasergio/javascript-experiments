// Ejecuta el siguiente código y observa que muestra
console.log(window);
console.log(globalThis);

// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true

// Ejecutar en la consola del navegador para visualizar la similitud de estos objetos
console.log(window); // navegador
console.log(global); // node
console.log(globalThis); // node y navegador
console.log(self); // webworker
console.log(frames);
console.log(this);


