var nombre = 'Sergio'

/*
function saludar(){
  console.log(`hola ${nombre}`)  
} 

saludar()
*/

/*
function saludar(nombre){
  console.log(`hola ${nombre}`)  
}
saludar("Claudia")
*/

/*
function saludar(){
  var nombre = "Claudia"
  console.log(`hola ${nombre}`)  
}
saludar()
*/

/*
function saludar(){
  nombre = "Claudia"
  console.log(`hola ${nombre}`)  
}
saludar()
*/

// hoisting, es decir, una variable declarada se “eleva” o “sube” a la parte superior de la función 
// (closure) en la que se encuentra
function saludar(){
  if(true){
    var nombre = "Claudia"
  }
  console.log(`hola ${nombre}`)  
}
saludar()

// esta declaracion es la traduccino que hace el interprete al ejecutar el codigo esta rescribiendo el codigo para que funcione.
function saludar(){
  var nombre;
  if(true){
    nombre = "Claudia"
  }
  console.log(`hola ${nombre}`)  
}
saludar()

console.log(`La variable nombre tiene el valor ${nombre}`)

function saludarVar(nombre){
  for(var i = 0; i <10; i++){
    console.log(`Hola ${nombre}`)
  }

  console.log(`El valor de i es: ${i}`) // no sale error imprimi 10
}

saludarVar("Sergio")

function saludarLet(nombre){
  for(let i = 0; i <10; i++){
    console.log(`Hola ${nombre}`)
  }

  console.log(`El valor de i es: ${i}`) // sale is not defined
}

saludarLet("Sergio")
