## Generators

- Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. La palabra
  reservada yield se usa para pausar y reanudar una función generadora.
- La estructura del Generador consta con la palabra `function*` esta es una función generadora heredada.
- El resultado que se quiere obtener se coloca la keyworkd `yield`, puede ser de cualquier tipo (string, numérico,
  objetos, etc) y se puede tener tantos yield que se desee.
- Para interar se utiliza la propiedad `next()`

```javascript
function* operations(a, b) {
    yield a + b;
    yield a - b;
    yield a * b;
    yield a / b;
    yield a % b;
}

const gen = operations(4, 2);
console.log(`Suma: ${gen.next().value}`);
console.log(`Resta: ${gen.next().value}`);
console.log(`Multiplicación: ${gen.next().value}`);
console.log(`División: ${gen.next().value}`);
console.log(`Modulo: ${gen.next().value}`);
```