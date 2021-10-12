# Funciones

## Funciones

- Las funciones son fracciones de código reutilizable
- Son una conjunto de sentencias para hacer alguna operacion o calculo que nos devuelva o no un resultado.
- Hay dos tipos de funciones
    - Función desclarativa (function declaration/ function statement)
    - Función expresiva (function expression / funciones anonimas)
- Para definir una función se utiliza la keyword `function`
- Importante diferenciar
    - Argumentos: Un argumento es el valor que pasamos a una función cuando la invocamos
    - Parametros: Un parametro es una variable que colocamos como parte de una función.
- Ejemplos
    - Funciones simples
    - Tipos de funciones
    - Funciones con retorno
    - Funciones con parametros
    - Funciones con arguments object
    - Funciones con parametros por defecto
    - Funciones con un objecto como parametro
    - Funciones IIFE (Immediately Invoked Function Expresion)
    - Funciones con el parametro rest `...names`
        - Se puede mandar n-cantidad de parametros
        - Los parametros rest deben se definidos al final de los parametros obligatorios o regulares
        - Propocionan una gran flexibilidad pero hay que tener cuidado cuando con los parametros regulares.

- [Ejemplo1](../examples/4-funciones/1-functions/README.md)

## Scope en las funciones

- Las variables declaradas el keyword `var` o dentro de las declaraciones de funciones NO tienen alcance de bloque
- Las variables declaradas con el keyword `let` solo funcionan en el bloque y se elimina cuando termina

- [Ejemplo2](../examples/4-funciones/2-function-scope/README.md)

## Arrow functions

- Introducido en ES6 o ECMAScript 2015
- Nos permite crear una expresion de función mas corta
- A diferencia de las funciones regulares, las arrow functions no tienen su propio valor
- Deben definirse antes de ser utilizadas
- Cuando la funcion tiene una linea de codigo no es necesario escribir el keyword `function`, `return` ni llaves.
- Efectos secundarios
    - Comportamiento diferente con el keyword `this` (se refiere al propietario de la funcion que estamos ejecutando)
    - No se puede utilizar el argument object
- Para hacer funciones arrow se utiliza `=>`.

- [Ejemplo3](../examples/4-funciones/3-arrow-functions/README.md)

## Funciones como parametro

- En una funcion se puede mandar como un parametro.
- Los parametros de una función es por defecto `undefined`.
- [Ejemplo4](../examples/4-funciones/4-parameter-function/README.md)

> ### Valores falsos.
>  - false
>  - 0
>  - null
>  - undefined
>  - NaN

## Cambiar el contexto de una funcion y funciones globales

- **Method call**:
    - Se puede cambiar el contexto de la funcion mandale a quien hara referencia el keyword `this`
    - Se puede mandar arguments
- **Method apply**:
    - Se puede cambiar el contexto de la funcion mandale a quien hara referencia el keyword `this`
    - Acepta una lista de argumentos
- **Method bind**
    - Para realizar una copia de una funcion y cambiar su contexto.
- Funciones Globales
    - https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm