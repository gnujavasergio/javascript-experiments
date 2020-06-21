/**
 * No esta bien declarado si se aumenta un parametro se tendra que añadir nuvamente
 * otro parametro al codigo.
 */
/*
function suma(n1, n2, n3 = 0, n4 = 0, n5 = 0){
 return n1 + n2 + n3 + n4 + n5
}
*/

/*
function suma(...numbers){
  console.log(numbers)
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  return sum
}

console.log(suma(4,8,12,1,7))
*/

function suma(...numbers){
    return numbers.reduce(function(sum, num){
      sum += num
      return sum
    })
  
  }
  
  console.log(suma(4,8,12,1,7))
  
  /*
  function dobles(...numbers){
    const result = []
    for(let i = 0; i < numbers.length; i++){
      result.push(numbers[i]*2)
    }
    return result
  }
  
  console.log(dobles(3,5,9))
  */
  
  /*
  function dobles(...numbers){
    return numbers.map(function(num) {
      return num * 2
    })
  }
  
  console.log(dobles(3,5,9))
  */
  
  const dobles = (...numbers) => numbers.map(num => num * 2 )
  
  console.log(dobles(3,5,9))
  
  /*
  function pares(...numbers){
    const result = [];
    const length = numbers.length;
    for(let i = 0; i < length; i++){
      const num = numbers[i];
      if(num %2 == 0){
        result.push(num);
      }
    }
    return result;
  }
  
  console.log(pares(2,3,4,5,6,7,8));
  */
  
  const pares = (...numbers) => numbers.filter(num => num % 2 == 0);
  
  console.log(pares(2,3,4,5,6,7,8));