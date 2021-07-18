# Conceptos basicos

## Valores y Tipos de datos
### Valores
- Valores primitivos
    - Valor tipo numero
        - 40
        - 4.5
    - Valor tipo cadena
        - "Sergio Ochoa"
    - Valor tipo booleano
        - true
        - false    
    - Valores vacios(hay que evitarlo)
        - null
        - undefined
- Valores no primitivos o tipo Objeto
    - Valor tipo array
        - [1,2,3]
    - Valor tipo objeto
        - { firstName: "Sergio Antonio" }
```javascript
// Utilizar en consola
typeof 40
"number"
typeof "Sergio Ochoa"
"string"
typeof true
"boolean"
typeof null
"object"
typeof undefined
"undefined"
typeof [1,2,3]
"object"
typeof {name: "Sergio"}
"object"
```
### Tipos de  datos
- Tipo de datos primitivos       
    - number
    - string
    - boolean
- Tipo de datos Objecto
    - Array []
      - Es una estructura de datos 
      - Es un objeto de tipo lista de alto nivel
      - Los arrays son objetos de tipo lista cuyo prototipo
        tiene metodos para realizar operaciones de recorrido
        y mutación
    - Object {}
        - Un objeto es una coleccion de propiedades(Propiedad es una asociación
          de clave y valor)
        - JavaScript esta diseñado en un paradigma de Objetos
- [Ejemplo0](../examples/2-basic/ejemplo0/README.md)

## Variables
- Para crear variables en javascript se utiliza el formato CamelCase.
- Variable: Espacios en memoria para almacenar un valor
- Las variables tienen que tener nombre significativos
- Una variable no puedo comenzar por numeros
- Una variable no puedo contener espacios y tampoco simbolos especiales
- No deben ser keywords(palabras reservadas)
- keywords para declarar variables
    - `var`
- [Ejemplo1](../examples/2-basic/ejemplo1/README.md)

# Operadores
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Operadores Aritmeticos
- Suma `+`
- Resta `-`
- Multiplicación `*`
- División `/`
- Modulo `%` es el restante de una división
- Potencia `**` calcula la potencia de un numero
 - [Ejemplo2](../examples/2-basic/ejemplo2/README.md)

## Operadores de comparación
- En que orden se evaluan las matematicas operaciones complejas
    1. Parentesis
    2. Exponenetes
    3. Multiplicacion/Division
    4. Adición/Sustracción
- Una forma facil de recordar este orden es usando el acronimo 
  PENDAS(ParentesisExponentesMultiplicaciónDivisiónAdiciónSustracción)
- `==` igual, compara el valor
- `!=` No igual o diferente, compara el valor
- `===` Igual estricto, compara el tipo y el valor
- `!==` No igual estricto, compara el tipo y el valor
- `<` menor que
- `>` mayor que
- `<=` menor o igual que
- `>=` mayor o igual que
- [Ejemplo3](../examples/2-basic/ejemplo3/README.md)

## Operadores de Asignación
- Un operador de asignación asigna un valor a su operando izquierdo en funcion de su valor de su operando derecho.
```javascript
// Asignación
var x = y;

// Asignacion de Suma
var x += y; 	// short
var x = x + y; // full

// Asignacion de resta
var x -= y; 	//short
var x = x - y; // full

// Asignación de multiplicación
var x *= y; // short
var	x = x * y; // full

// Asignación de División
var x /= y; // Short 	
var x = x / y; // full

// Asignación de residuo
var x %= y; // short
var	x = x % y; // full

// Asignación de exponenciación
var x **= y; // short
var	x = x ** y; // full

// Asignación a la izquierda
var x <<= y;
var x = x << y;

// Asignación a la derecha
var x >>= y; 	
var x = x >> y;

// Asignación de desplazamiento a la derecha sin firmar
var x >>>= y;
var	x = x >>> y;

// Asignación AND a nivel de bit
var x &= y;
var x = x & y;

// Asignación XOR a nivel de bit
var x ^= y ;
var x = x ^ y;

// Asignación OR a nivel de bit
var x |= y;
var x = x | y;
```
- [Ejemplo4](../examples/2-basic/ejemplo4/README.md)

## Operadores Logicos
- `!expresion` Realiza una negación en la expresión
- `&&` AND
- `||` OR
- [Ejemplo5](../examples/2-basic/ejemplo5/README.md)

## Operadores de incremento y decremento
- `++i` Pre incremento
- `i++` Post incremento
- `--i` Pre decremento
- `i--` Post decremento
- [Ejemplo6](../examples/2-basic/ejemplo6/README.md)

## Operador Ternario
- El operador tenerario si lo utilizo en java, php, dart y podra utilizarlo en javascript de la misma forma.
- `condition ? (statement if true) : (statement if false);`
- [Ejemplo7](../examples/2-basic/ejemplo7/README.md)