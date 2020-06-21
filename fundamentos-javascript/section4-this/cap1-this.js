/*
 // Primera forma
 class Persona {

  constructor(nombre, amigos = []){
    this.nombre = nombre;
    this.amigos = amigos;
  }

  listarAmigos(){
    const self = this;
    this.amigos.forEach(function(amigo) {
      console.log(`Hola, mi nombre es ${self.nombre} y soy amigo de ${amigo}`);
    })
  }
}
*/

/*
// Segunda Forma
class Persona {

  constructor(nombre, amigos = []){
    this.nombre = nombre;
    this.amigos = amigos;
  }

  listarAmigos(){
    const _this = this;
    this.amigos.forEach(function(amigo) {
      console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`);
    })
  }
}
*/

/*
// Tercera Forma
class Persona {

  constructor(nombre, amigos = []){
    this.nombre = nombre;
    this.amigos = amigos;
  }

  listarAmigos(){
    this.amigos.forEach(function(amigo) {
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
    }.bind(this));
  }
}
*/

// Cuarta forma es la mejor forma
// las otras son para ver que exiten formas que veremos en otros codigos
class Persona {

    constructor(nombre, amigos){
      this.nombre = nombre;
      this.amigos = amigos || [];
    }
  
    listarAmigos(){
      this.amigos.forEach(amigo => {
        console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
      })
    }
    
  }
  
  const sergio = new Persona("Sergio", ["Angel", "Korderao"]);
  sergio.listarAmigos();