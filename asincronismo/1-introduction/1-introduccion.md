## Conceptos

- JavaScript es single-threaded: Aun con multiples procesadores, solo se puede ejecutar tareas en un solo hilo, llamado
  el hilo principal.
- Bloqueante: Una tarea no devuelve el control hasta que este completado.
- No bloqueante: Una tarea que se devuelve inmediatamente con independencia del resultado. Si se completo. devuelve los
  datos sino un error
- Sincrono: Las tareas que se ejecutan de forma secuencial, se debe esperar a quese complete para continuar con la
  siguiente tarea.
- Asincronismo: Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea devuelta cuando
  sea completada.
- Concurrencia en JavaScript: Utiliza un modelo de concurrencia "basado en un loop de eventos"
- Event Loop o Loop de eventos: Es un patron de diseño que espera y distribuye eventos o mensajes a un programa.

## Event loop

- Lectura recomendada: https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
- Ejemplo grafico - http://latentflip.com/loupe/

## Asincronismo

- JavaScript es sincrono y no bloquenate, con un bucle de eventos (concurrencia) implementando en un unico hilo para sus
  interfaces de I/
- La asincronía es uno de los conceptos principales que rige el mundo de Javascript.
- Al ser Javascript es un lenguaje no bloqueante, lo que hará es mover esa tarea a una lista de tareas pendientes a
  las que irá «prestándole atención» a medida que lo necesite, pudiendo continuar y retomar el resto de tareas a
  continuación de la segunda.
- Con el asincronismo se pueden ejecutar varias tareas al mismo tiempo y el orden en el que se ejecutan no siempre sera
  en el que se vayan devolviendo.

- [Ejemplos callback](../examples/1-settimeout/README.md)

### Ejemplos

- Un fetch() a una URL para obtener un archivo json
- Una tarea programada con setTimeOut que se ejecutara en el futuro.
- Una comunicación desde javascript a la PAI de un sensor.
- La reproduccion de un audio o un video

## Como gestionar la asincronia?

- En javaScritpt exiten varias formas de gestionar la asincronia, donde quizas las mas populares son las siguientes.
    - **callbacks**: Probablemente el mas clasico.
    - **promesas**: La forma mas moderna y actual de gestionar la asincronia.
    - **async/await**: Promesas pero con mas sintacsis.
    - **top-level await**: Una variación de **async/await** donde no es necesario utilizar async.
