// sino declaramos la variables en el contesto que se utilizan
// por defecto tomara los de window
// no se puede asginar algo a this porque no es como una variable
const sergio = {
    nombre:'Sergio',
    apellido:'Ochoa'
  }
  
  function saludar(veces, uppercase){
      let str = `Hola ${this.nombre} ${this.apellido}`;
      srt = uppercase ? str.toUpperCase() : str;
      for(let i = 0; i < veces; i++){
        console.log(str);
      }
  }
  // con call le decimos quien sera this 
  // el primer parametro de call es el contexto
  // call funciona con solo un parametro
  const params = [3, true];
  saludar.call(sergio, ...params);
  
  // apply se tiene que mandar como array
  saludar.apply(sergio, [3, true]);
  
  
  
  
  