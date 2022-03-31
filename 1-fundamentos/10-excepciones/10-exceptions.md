## Excepciones

- Se puede lanzar las excepciones usando la instruccion `throw` y manejarlas usando las
  declaraciones `try...catch...finaly`.

## Declaraciones try...catch

- Si se quiere detectar una excepción y poder manipularla se utilizar la declaración `try...catch`.
- La declaración `try...catch` consta de un bloque `try` que contiene uno o mas declaraciones y un bloque `catch` que
  contiene lo que se debe hacer si se lanza una excepción en el bloque `try`.
- `finally` es el bloque que se ejecutara que siempre se ejecutara y es un bloque opcional.
```javascript
try {

} catch (e) {

} finally {

}
```
- [try-catch-finally](../examples/10-exceptions/1-try-catch-finally/1-try-catch.js)

## Throw
- Con throw se puede lanzar un error personalizado.
- Para crear la excepcion peronalizada al menos tiene que tener dos propiedades mensaje y nombre.

## Tipos de errores
- ReferenceError
- RangeError
- TypeError
- URIError
- SyntaxError
- EvalError: Solo compatible para versiones antiguas 