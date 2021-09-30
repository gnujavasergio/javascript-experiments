# ECMAScript

- Es la especificación del lenguaje propuesto por ECMA Internacional (Institucion encargada de los estandares)
- Desde junio del 2015 y cada año se implementa estos estandares en el lenguaje de JavaScript
- JavaScript nace de la propuesta de NetScape en 1996
- JavaScript se estanco en mejoras casi 16 años desde 1996 hasta Junio de 2015
- Las mejoras del lenguaje para por un comite encargado de revisar las nuevas caracteristicas que se añadan el lenguaje.

> ECMA-262 - ECMAScript® 2021 language specificatio - https://www.ecma-international.org/publications-and-standards/standards/ecma-262/

## ECMASCRIPT 2015 o ES6

- Parámetros por defecto en una funcion
- Concatenación con los template literal **``** o también llamadas comillas francesas.
- Multilinea 
- Desestructuracion

  ```javascript
  let person = {
    'name': 'Sergio',
    'age': 33
  }
  let {name, age} = person; // Desestructuracion 
  ```
- Spread Operator `...`
- Manejo de variable en un scope con `let`
- Constantes con `const`
  - No se puede reasignar un valor
  - Es una constante que no pude cambiar su valor
- Parametros de objectos
- Arrow Functions
  - Son funciones anonimas
  - Nos permite crear una expresion de función mas cortas
  - Deben definirce antes de ser utilizadas
  - Cuando la funcion tiene una linea de codigo no es necesario escribir el keyword `function`, `return` ni llaves.
  - Para hacer funciones arrow se utiliza `=>`.
- Promises
    - Para manejar de mejor forma el asincronismo
- Clases
  - Creacion de clases con el keyword con `class`
  - Herencia con el keyword `extends`
- Modulos
  - export
  - import
- Generadores  
  - Generators es una funcion especial que retorna una serie de valores 
    segun el algoritmo definido
  - Utilizarlo cuando queremos ejecutar una serie de algoritmos segun los valores que se le asigne
  - Caso de ejemplo que se lo puede utilizar es el fibonacci.

## ECMASCRIPT 2016 o ES7
Lanzada en junio del 2016

- `includes`
  - Para poder verificar si existe un valor en un array o un string.
- Potencia
  - Poder calcular la potencia de un numero con `**`

## ECMASCRIPT 2017 o ES8
Lanzada en julio del 2017
- `Object.entries` para convertir una objeto a matriz
- `Object.values` devuelve los valores de un objeto a un arreglo
- `Padding` Para poder añadir elementos al inicio o final de una cadena
  - `padStart`: Añade elementos al inicio de la cadena
  - `padEnd`: Añade elementos al final de la cadena.
- Trailling comas: Ponder poner la una coma al final de un objeto o array dando la posibilidad 
de añadir otro elemento
- `async await`  
   
## ## ECMASCRIPT 2018 o ES9
Lanzada en junio de 2018
- Spread Operator `...` en objectos