## Scope

## Scope

- El scope es el alcance que puede tener las variables dentro nuestro codigo.
- El Scope determina la accesibilidad de variables, objetos y funciones desde deferentes partes.
- Tipos de Scope
    - Global scope
    - Local scope
        - Function Scope
        - Block Scope
    - Module scope

### Global Scope

- Las variables globales quiere decir que se pueden acceder deesde cualquier bloque de codigo.
- Se pueden crear variables globales con `var`, `let` y `const`.
- con `var`
    - Si se quiere declarar una variable con `var` con el mismo nombre se puede y se asigna el valor sin problemas
    - Crear una variable global con var es una mala practica.
- Con `let` y `const`
    - No se puede redeclarar una variable con el mismo nombre.
    - Generar un error de **Identifier 'variable' has already been declared**
    - Nunca utilizar una variable sin crearla antes con `let` por esa razon se crearia una variable global.

### Scope local

- Nos permite acceder a una variable en un bloque de codigo `{}` o una funcion.
- El scope local tiene dos variantes
    - Function scope
    - Block scope: Hace referencia a lo que este dentro de una llaves
- [Ejemplo Scope local](../examples/8-scope/2-local.js)
- [Ejemplo Function Scope](../examples/8-scope/3-function-scope.js)
- [Ejemplo Block Scope](../examples/8-scope/4-block-scope.js)

### Module Scope

- La vida de una variable o el scope de una variable va estar limitado al archivo donde va estar definido.
- Module scope limite el alcance de las variables del archivo js y que no son visibles
- La vida de una variable el Scope de una variable va estar limitado al archivo donde está definido.

## Reasignacion y redeclaracion

- La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.
    - Una variable declarada con var puede ser redeclarada y reasignada.
    - Una variable declarada con let puede ser reasignada, pero no redeclarada.
    - Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en
      una línea, caso contrario habrá un error.

## Stric mode

- El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código
- En este modo, se reduce las cosas que podemos hacer y los errores que podemos crear.
- Colocando en la primera línea "use strict" para todo el archivo.
- También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.