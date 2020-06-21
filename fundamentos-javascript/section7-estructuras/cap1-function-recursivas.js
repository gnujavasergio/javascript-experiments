function fibonacci(num){
    if(num == 1) return 0;
    if(num == 2) return 1;
    contador++;
    console.log(contador);
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  fibonacci(6);