## Promesas

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
- Las promesas son un concepto para resolver el problema de asincronia de una forma mucho mas elegante y practica
  que utiliza funciones callbacks.
- Las promesas tienen 3 estados
    - pending
    - fulfilled
    - rejected
- Metodos que se pueden utilizar en una promesa
    - `.then(resolve)`: Ejecuta la función callback resolve cuando la promesa se cumple.
    - `.catch(reject)`: Ejecuta la función callback reject cuando la promesa se rechaza
    - `.then(resolve, reject)`: Metodo equivalente a las dos anteriores en el mismo `.then()`
    - `.finally(end)`: Ejecuta la funcion callback end tanto si se cumplo como se si rechazara.

```javascript
new Promise((resolve, reject) => {
    // --- llamado asíncrono
    if (todoOK) {
        // -- se ejecutó el llamado exitosamente
        resolve()
    } else {
        // -- hubo un error en el llamado
        reject()
    }
})
```

- [Ejemplos promesas](../examples/4-promesas/README.md)