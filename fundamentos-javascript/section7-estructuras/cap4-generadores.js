// Para declarar generadores se tiene que colocar un asteristico en el keyword function
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      let f = a;
      a = b;
      b = f + a;
      let reset = yield f; // yield sera como un return, yield puede resivir un valor
      if (reset) { a = 0; b = 1; }
    }
  }
  
  const fibo = fibonacci();
  