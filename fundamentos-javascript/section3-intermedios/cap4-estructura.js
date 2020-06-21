// Variables
var sergio = "Sergio";
sergio = 25;
sergio = new Date();

// variables asginacion de funciones

sergio = function saludar() { alert('hola') }

sergio = {
  nombre: "Sergio",
  apellido: "Ochoa",
  edad: 30,
  saludar: function saludar() { alert(`Hola, me llamo ${nombre} ${apellido}`) }
};

// Constantes
const edad = 30;
edad++; // Uncaught TypeError: Assignment to const variable

// Variables muy variables
function saludar(){
  var nombre = "Sergio"
  alert(`Hola ${nombre}`)
}

nombre // undefined
// porque esto sucede porque la variable se la declaro dentro de la funcion saludar

function saludar(){
  nombre = "Sergio";
  alert(`Hola ${nombre}`);
}

nombre //"Sergio"
window.nombre == nombre // true
// no contaminar el scope gloval


var dias  = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
];

// forma incorrecta
for(var i = 0; i < length; i++){    
    console.log(`El día ${dias[i]} ${nombre} de la semana`);    
}
i // ? = >tendra un valor fuera del for

// forma correcta
for(let i = 0; i < length; i++){    
    console.log(`El día ${dias[i]} es el dia #${i+1} de la semana`);    
}

i // undefined

// Palabras reservadas

// break
// function
// return 
// typeof
// case
// do
// if
// switch
// var
// catch
// else
// in
// this
// void
// continue
// false
// instanceof
// throw
// while
// debugger
// finaly
// new
// true
// with
// default
// for
// null
// try

// Palabras reservadas en ECMAScript 5
// class
// const
// enum
// export
// extends
// import
// super

// Palabras reservadas en "strict mode"
// implements
// let
// private
// public
// yield
// interface
// package
// protected
// static

// Problemas con ;
// IIFE Inmediately Invoked Function Expresion

// Ocurrira un error si no ponemos ;
const nombre = "Sergio"

(function saludar(nombre){
  console.log(`Hola ${nombre}`)
})()
// Uncaught TypeError: "Sergio" is not a function

// Solución 
const nombre = "Sergio"

;(function saludar(nombre){
  console.log(`Hola ${nombre}`)
})()

