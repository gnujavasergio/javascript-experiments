# Historia

- 950 Inicio de las computadoras
- 1969 Se creo la red ARPANET,
- 1970-1990 Se explora ARPANET
- 1990 Tim Berners.lee dio pauta al internet y se conocio el termino World Wide Web (forma de acceder a archivos,
  documentos enlaces al alcanze de todos)
- 1993 Nacimiento de un Navegador.

## Universitarios pioneros

- escribieron un sofware simple que inicio una revolucion.
- Marc Andreessen: le dio vida a una gran empresa
- Netscape: Tenia un navegador que podias acceder a internet (HTML simple, enlaces, algunas fotografias)

## **Browser Wars**: Guerra de navegadores

- Microsoft en 1995 lanzó Internet Explorer, en la guerra nacieron tecnologias como CSS, conceptos como la empresa
  mozilla y JS.

## JavaScript

- Apareció en 4 de diciembre de 1995 Diseñado por Netscape Communications, Fundación Mozilla.
- Su primer nombre fue Mocha
- Luego LiveScript
- Finalmente JavaScript.
- Microsoft no se podia quedar atras y lanzo JScript

Y por eso tenemos ECMAScript(1997) permitiendo un estandar.

# ECMAScript

- Es la especificación del lenguaje propuesto por ECMA Internacional (Institucion encargada de los estandares)
- Desde junio del 2015 y cada año se implementa estos estandares en el lenguaje de JavaScript
- JavaScript nace de la propuesta de NetScape en 1996
- JavaScript se estanco en mejoras casi 16 años desde 1996 hasta Junio de 2015
- Las mejoras del lenguaje para por un comite encargado de revisar las nuevas caracteristicas que se añadan el lenguaje.

> ECMA-262 - ECMAScript® 2021 language specificatio

- https://www.ecma-international.org/publications-and-standards/standards/ecma-262/

## Evolucion de ECMAScript

- 1995 Mocha
- 1996 JScript (Microsoft)
- 1997 ECMA-262(ES) Donde se empezo a llamar ECMAScript
- 1997 ES1
- 1998 ES2
- 1999 ES3
- 2000 ES4 ABANDONADO
- 2005 ES5
- 2015 ES6
- 2016 ES7
- 2017 ES8
- 2018 ES9
- 2019 ES10
- 2020 ES11
- 2021 ES12
- 2022 ES13
- ESNext es un nombre que siempre indica la próxima versión de javascript y esto consta de los siguientes pasos

## Comite Tecnico TC39

- Comite Tecnico quien se encarga de resivir las propuestas, evaluarlas para llevarlas a la siguiente version y utilizar
  en la proxima version.
- [tc39.es](https://tc39.es/)
- Proceso que tiene una idea para poder ser implementado
  ![stage](images/stage.png)
    * Stage0: Straw-person (borrador, cualquier persona puede tener una idea para implementar en el estandar)
    * Stage1: Proposal (propuesta formal)
    * Stage2: Draft (borrador, como va a funcionar la implementacion el impacto entre otros)
    * Stage3: Candidate (se elige el candidato, vamos a tener una propuesta que va ayudar a mejorar el lenguaje.)
    * Stage4: Finished (va a ser desplegada en la version normalmente en JUNIO)

## ECMASCRIPT 2015 o ES6

- Parámetros por defecto en una funcion
- Strings
    - Template literals (comillas francesas)
        - Concatenación con los template literal **``**
        -
    - Plantilla multilínea
        - La plantilla multilínea consiste en crear mensajes que contengan varias líneas separadas entre sí, utilizando
          las plantillas literales. Antes de ES6, la forma de crear una plantilla multilínea era agregar \n al string.
- Desestructuración: La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de
  arreglos o propiedades de objetos en distintas variables.

  ```javascript
  let person = {
    'name': 'Sergio',
    'age': 33
  }
  let {name, age} = person; // Desestructuracion 
  ```
- **Spread Operator**: El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los
  elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.
- Las nuevas palabras reservadas let y const resuelven varios problemas con var como el scope, hoisting, variables
  globales, re-declaración y re-asignación de variables.
    - Una variable declarada con var puede ser re-declarada y re-asignada.
    - Una variable declarada con let puede ser re-asignada, pero no re-declarada.
    - Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser
      en una línea, caso contrario habrá un error.

- Object literals: Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre. Antes de
  ES6, para crear un objeto a partir de variables consistía en la siguiente manera:
- Arrow Functions
    - Son funciones anonimas
    - Nos permite crear una función mas cortas
    - Deben definirce antes de ser utilizadas
    - Cuando la funcion tiene una linea de codigo no es necesario escribir el keyword `function`, `return` ni llaves.
    - Para hacer funciones arrow se utiliza `=>`.
- Promises
    - Para manejar de mejor forma el asincronismo
    - Se representa como un objeto que puede generar un valor único a futuro,
    - Las promesas tienen 3 estados
        - pending
        - fulfilled
        - rejected
- Clases
    - Creacion de clases con el keyword con `class`
    - Herencia con el keyword `extends`
- Modulos
    - export
    - import
- Generadores: Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se
  quedaron, recordando su scope y seguir retornando valores.
    - Generators es una function especial que retorna una serie de valores segun el algoritmo definido
    - Utilizarlo cuando queremos ejecutar una serie de algoritmos segun los valores que se le asigne
    - Caso de ejemplo que se lo puede utilizar es el fibonacci.](https://forum.openkm.com/viewtopic.php?t=24659)
- Set: Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.
    - const set = new Set(iterable)
    - Para manipular estas estructuras de datos, existen los siguientes métodos:
        - add(value): añade un nuevo valor.
        - delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
        - has(value): retorna un booleano si existe o no el valor dentro del Set.
        - clear(value): elimina todos los valores del Set.
        - size: retorna la cantidad de elementos del Set.

## ECMASCRIPT 2016 o ES7

Lanzada en junio del 2016

- `includes`
    - Para poder verificar si existe un valor en un array o un string.
- Potencia
    - Poder calcular la potencia de un número con `**`

## ECMASCRIPT 2017 o ES8

Lanzada en julio del 2017

- `Object.entries` para convertir una objeto a matriz
- `Object.values` devuelve los valores de un objeto a un arreglo
- `Object.keys` devuelve las llaves de un objeto a un arreglo
- `Padding` Para poder añadir elementos al inicio o final de una cadena
    - `padStart`: Añade elementos al inicio de la cadena
    - `padEnd`: Añade elementos al final de la cadena.
- Trailling comas: Ponder poner la una coma al final de un objeto o array dando la posibilidad de añadir otro elemento y
  evitar errores de sintaxis.
- `async await`

## ECMASCRIPT 2018 o ES9

Lanzada en junio de 2018

- Spread Operator `...` en objectos
- Spread Operator `...` en la propagación de propiedades
- Se añadio `finally` en las promesas: El método finally para promesas consiste en ejecutar código después que una
  promesa haya sido ejecutada como resuelta o rechazada.
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
    - Nota: JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER.
      Fuera de estos límites, los cálculos matemáticos pueden fallar y mostrar resultados erróneos. Con BigInt esto se
      resuelve.
- `Promise.allSettled([])`:
    - No importa el estado de las promesas `resolve` o `reject`
    - A diferencia de `Promise.all([])` solo importa que todas las promesas se resuelvan y si existe un error continua
      ejecutando.
- globalThis:
    - Proporciona una forma estandar de acceder al valor global
    - Ahora no solo se podra usar en el navegador sino tambien en las aplicaciones con nodejs.
    - En el navegador el objeto global es `window` pero par nodejs es `global`. Sin enbargo en node no podras acceder a
      window ni en el navegador podras acceder a global
- Operador logico de nulo `??` o nullish: Para colocar un valor por defecto cuando una variable es nulo.
- matchAll: devuelve todas las coincidences del string específico a partir de una expresion regular, colocada como
  argumento.
- **Optional chaining**
    - Trabajar con diferentes niveles cuando no existe un key en un objecto
      ```javascript
      let developer = {}
      console.log(developer?.country?.name);
      ```

## ECMASCRIPT 2021 o ES12

Lanzada en junio de 2021

- Numeric separators: Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el
  caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.
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

## ECMASCRIPT 2022 o ES13

Lanzada en junio de 2022

- Metodo `at` de arrays
    - Sirve para acceder a los elementos a partir del indice.
    - Los indices pueden ser positivos y negativos
    - Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. El
      índice 0 es la primera posición.
    - Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.
      El índice -1 es la última posición.

- Top level
    - Top level await permite utilizar la palabra reservada await sin estar dentro de una función asíncrona con async.
    - Solo se puede utilizar await en la parte superior del archivo de un módulo.
  
## ESNext
- https://github.com/tc39/ecma262#ecmascript
- Lo que ya fue implementado https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md
- Lo que se esta implementando https://github.com/tc39/proposals