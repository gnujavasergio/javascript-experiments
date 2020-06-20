# Estructuras de seleccion

## if-else
- Esta estructura de control es igual a java, c++, c#, dart.
- Las sintaxis basico para utilizar if-else:
```javascript
if(condicion){
      //Codigo al cumplir condicion
} else{
      //Codigo al No cumplirse
} 
```
- If-else en escalera
```javascript
if(condicion1){
    // codigo
} else if(condicion2){
    //codigo
} else if(condicion3){
    //codigo
} else {
    // codigo
}
```
- [Ejemplo1](../examples/3-flujos-de-control/ejemplo1/README.md)

## Switch/Case
- **switch/Case** esta una estructura de control para multiplos desiciones es un replazo al `if-else en cascada`.
- Puedes utilizar `int` y `String` y tambien un `enum` para evaluar la condicion en `case`.
- La keyword `case` no puede terminar vacia, debe finalizar con `break` o puede tambien terminar con `continue`, `throw` o `return`.
- Si no encuentra un valor en el `switch` se utiliza el keyword `default`.
- Esta estructura de control es igual a java, c++, c#, dart.
- La sintaxis basica seria:
```javascript
switch(valor) { 
   case expresion1: { 
      // acciones; 
   } 
   break; 
   case expresion2: { 
      //acciones; 
   } 
   break; 
      
   default: { 
      //acciones si no aplican las demás;  
   }
   break; 
} 
```
- [Ejemplo2](../examples/3-flujos-de-control/ejemplo2/README.md)