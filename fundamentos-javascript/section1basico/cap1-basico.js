// Comillas dobles
console.log("El área de un triangulo de base 5 y altura 7 es: " + 5*7/2);
//comillas dobles
console.log('El área de un triangulo de base 5 y altura 7 es: ' + 5*7/2);
//comillas invertidas
// no hace falta concatenar
console.log(`El área de un triangulo de base 5 y altura 7 es:  ${5*7/2}`);
//variables con let
let base = 5
let height = 7
function triangleArea(base, height){
  return base*height/2
}
console.log(`El área de un triangulo de base 5 y altura 7 es:  ${triangleArea(base,height)}`);

// otra declaración de la function pero se la llama de la misma forma
let trianguleArea = function(base, height){
  return base*height/2
}
// Arrow Functions con varias lineas de codigo
// es nuevo colocarle const a la variable de una funcion por que no tendria
// poder cambiarse
const trianguleArea = (base, height) => {
  // con llaves cuando son varias lineas
  return base*height/2
}
// Arrow functions con una linea de codigo
const trianguleArea = (base, height) => base*height/2
