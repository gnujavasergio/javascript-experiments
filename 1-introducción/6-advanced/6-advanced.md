# Conceptos avanzados

## Scope
- El scope es el alcanze que puede tener las variables
- [Ejemplo1](../projects/6-advanced/ejemplo1/app.js)
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
- [https://developer.mozilla.org/es/docs/Glossary/Hoisting](https://developer.mozilla.org/es/docs/Glossary/Hoisting)
- [https://medium.com/@anamartinezaguilar/qu%C3%A9-es-el-hoisting-327870f67b36](https://medium.com/@anamartinezaguilar/qu%C3%A9-es-el-hoisting-327870f67b36)

- Solo funciona con `var` y `function` en ES5 y se soluciona con `let` y `const` en ES6.
- [Ejemplo2](../projects/6-advanced/ejemplo2/app.js)

## Coerción
- Coerción significa poder cambiar de un valor a otro
- Hay dos tipos de coerciones
    - Coercion implícita: Es cuando un lenguaje nos ayuda a decidir que valor nos devolvera en una operacion.
    - Coerción explicita: Es lo que nosotros obligamos a que se covierta el valor a algo que necesitamos. Funciones explicitas
        - String(value) 
        - Number(value)
        - Boolean(value)
- [Ejemplo3](../projects/6-advanced/ejemplo3/app.js)

## Valores: Truthy y Falsy
- Para realizar validaciones se tiene que saber que devuelve falso o verdadero.
- [Ejemplo4](../projects/6-advanced/ejemplo4/app.js)