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
    - Generators es una funcion especial que retorna una serie de valores segun el algoritmo definido
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
- Trailling comas: Ponder poner la una coma al final de un objeto o array dando la posibilidad de añadir otro elemento
- `async await`

## ECMASCRIPT 2018 o ES9

Lanzada en junio de 2018

- Spread Operator `...` en objectos
- Spread Operator `...` en la propagación de propiedades
- Se añadio `finally` en las promesas
- Mejoras en regex: obtener de una forma mas facil las partes del regex
    - https://www.genbeta.com/desarrollo/expresiones-regulares-regex-herramientas-online-para-probarlas
    - https://regexper.com/#%0A%0A%5B0-9%5D*%5B.%5D%5Cd%7B2%7D%5B0-9%5D*
    - https://www.browserling.com/tools/text-from-regex

## ECMASCRIPT 2019 o ES10

Lanzada en junio de 2019

- `Array.prototype.flat(niver_profundidad)`: Nos permite aplanar los arreglos.
- `Array.prototype.flatMap()`: Nos permite primero mapear cada elemento, luego aplana el resultado a un arreglo. Es
  identico a `map` y `flat` de
  profundidad. [flatMap](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- `String.prototype.trimStart()` Nos permite eliminar los espacios de un string al inicio.
- `String.prototype.trimEnd()` Nos permite eliminar los espacios de un string al final
- Mejoras en try-catch: No es necesario mandar error a catch
- **Object.fromEntries()** es el inverso a  **Object.entries()** es decir convierte de matriz a objecto
- `Symbol.prototype.description`: Obtener la descripcion de un
  simbolo. [Documentacion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## ECMASCRIPT 2020 o ES11

Lanzada en junio de 2020

- Dynamic import
    - Se importa dinamicamente archivos con javascript.
    - Mejora el performance de nuestro codigo
- **BigInt**:
    - Ahora permite trabajar con numeros mayores a 22^53
    - Podemos crear un **BigInt** primitivo colocando `n` al final del numero
    - Podemos crear con el objeto BigInt
- `Promise.allSettled([])`:
    - No importa el estado de las promesas `resolve` o `reject`
    - A diferencia de `Promise.all([])` solo importa que todas las promesas se resuelvan y si existe un error continua
      ejecutando.
- GloablThis:
    - Proporciona una forma estandar de acceder al valor global
    - Ahora no solo se podra usar en el navegador sino tambien en las aplicaciones con nodejs.
- Operador logico de nulo `??`: Para colocar un valor por defecto cuando una variable es nulo.
- **Optional chaining**
    - Trabajar con diferentes niveles cuando no existe un key en un objecto
      ```javascript
      let developer = {}
      console.log(developer?.country?.name);
      ```

## ECMASCRIPT 2021 o ES12

Lanzada en junio de 2021

- Replace y replaceAll: Para remplazar valores en una cadena.
- Metodos privados en una clase
    - Para convertir un metodo privado utilizamos `#`;
- `Promise.any([])`: Nos devuelve la primera promesa que se resuelva correctamente
- `this.ref = new WeakRef`: Crear una referencia devil de nuestra clase para que el recolector de basura de JavaScript
  no elimine la instancia de la clase.
- Nuevos operadores de Asignacion
    - `&&=`
    - `||=`
    - `??=`

## Comite Tecnico TC39

- Comite Tecnico quien se encarga de resivir las propuestas, evaluarlas para llevarlas a la siguiente version y utilizar
  en la proxima version.
- [tc39.es](https://tc39.es/)
- Proceso que tiene una idea para poder ser implementado
  ![stage](images/stage.png)
  