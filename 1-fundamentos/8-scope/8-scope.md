## Scope

## Scope

- El scope es el alcanze que puede tener las variables dentro nuestro codigo.
- El scope de decidir a que bloques de codigo
    - Hay dos tipos de scopes
        - Scope global
        - Scope local

### Scope global

- Las variables globales quiere decir que se pueden acceder deesde cualquier bloque de codigo.
- Se pueden crear variables globales con `var`, `let` y `const`.
- con `var`
    - Si se quiere declarar una variable con `var` con el mismo nombre se puede y se asigna el valor sin problemas
    - Crear una variable global con var es una mala practica.
- Con `let` y `const` 
    - No se puede redeclarar una variable con el mismo nombre.
    - Generar un error de **Identifier 'variable' has already been declared**
    - Nunca utilizar una variable sin crearla antes con `let` por esa razon se crearia una variable global.
- [Global scope](../examples/8-scope/1-global.js)

### Scope local
- Nos permite acceder a una variable en un bloque de codigo `{}` o una funcion.
- El scope local tiene dos variantes
    - Function scope
    - Block scope: Hace referencia a lo que este dentro de una llaves
- [Ejemplo Scope local](../examples/8-scope/1-local.js)
- [Ejemplo Function Scope](../examples/8-scope/3-function-scope.js)
- [Ejemplo Block Scope](../examples/8-scope/4-block-scope.js)

    