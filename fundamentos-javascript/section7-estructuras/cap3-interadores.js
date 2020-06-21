function fibonacci() {
    let a = 0, b = 1;
    return {
      next: function (reset) {
        if (reset) a = 0; b = 1;
        let f = a;
        a = b;
        b = f + a;
        return { value: f, done: false }
      }
    }
  }
  
  const fibo = { nombre: 'Sergio' };
  // esta linea hace que el for llame al metodo next en el for
  fibo[Symbol.iterator] = fibonacci;
  const fibo1 = fibonacci();
    fibo1.next();
  fibo.next(true); // reseteamos la lista infinita
  let i = 0;
  for (let value of fibo) {
    console.log(value);
    i++;
    if (i > 20) break;
  }
  