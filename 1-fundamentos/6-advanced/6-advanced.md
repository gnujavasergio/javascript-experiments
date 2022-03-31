# Conceptos avanzados

## Scope
- El scope es el alcanze que puede tener las variables dentro nuestro codigo.
- El scope de decidir a que bloques de codigo   
    - Hay dos tipos de scopes
        - Scope global
        - Scope local  
- [Scope](../examples/6-advanced/1-scope/app.js)
```javasript
// Scope Global puede ser accedido en toda la aplicacion
var firstName = "Sergio"; 

function fullName() {
    // Scope Local solo puedo ser accedido solo en la funcion
    var lastName = "Ochoa";
    return firstName + " " + lastName;    
}

fullName(); // Sergio Ochoa

console.log(fistName); // Correcto
console.log(lastName); // Incorrecto Sale error lastName is not defined
```
## Hoisting
- Hoisting es cuando las variables y las funciones se declaran antes que se procese cualquier tipo de código.
- Hoisting solo se genera en ESCMASCRIPT 5 hacia abajo este problema ya no ocurre con ESCMASCRIPT 6.
- Para obligar que no se pueda usuar una variable sin antes iniciarlo es una buena practica usar `use strict`  
- [https://developer.mozilla.org/es/docs/Glossary/Hoisting](https://developer.mozilla.org/es/docs/Glossary/Hoisting)
- [https://medium.com/@anamartinezaguilar/qu%C3%A9-es-el-hoisting-327870f67b36](https://medium.com/@anamartinezaguilar/qu%C3%A9-es-el-hoisting-327870f67b36)

- Solo funciona con `var` y `function` en ES5 y se soluciona con `let` y `const` en ES6.
- [Hoisting](../examples/6-advanced/2-hoisting/app.js)

## Coerción
- Coerción significa poder cambiar de un valor a otro
- Hay dos tipos de coerciones
    - Coercion implícita: Es cuando un lenguaje nos ayuda a decidir que valor nos devolvera en una operacion.
    - Coerción explicita: Es lo que nosotros obligamos a que se covierta el valor a algo que necesitamos. Funciones explicitas
        - String(value) 
        - Number(value)
        - Boolean(value)
- [Ejemplo3](../examples/6-advanced/3-coercion/app.js)

## Valores: Truthy y Falsy
- Para realizar validaciones se tiene que saber que devuelve falso o verdadero.
- [Ejemplo4](../examples/6-advanced/4-truthy-and-falsy/app.js)

## Debugger
- Podemos colocar break points o puntos de ruptura para revisar el codigo con el keyworrd `debugger`