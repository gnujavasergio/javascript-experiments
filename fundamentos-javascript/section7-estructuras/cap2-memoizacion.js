let contador = 0;
function fibonacci1(num){
  if(num == 1) return 0;
  if(num == 2) return 1;
  contador++;  
  return fibonacci1(num - 1) + fibonacci1(num - 2);
}

fibonacci1(15);

let cont = 0;
function fibonacci(num, storage = {}){
  if(storage[num]){
    return storage[num]
  }
  if(num == 1) return 0;
  if(num == 2) return 1;
  cont++;  
  return storage[num] = fibonacci(num - 1, storage) + fibonacci(num - 2, storage);
}

fibonacci(100);