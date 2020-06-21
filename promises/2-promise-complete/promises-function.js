'use strict'
var promiseCount = 0;
function testPromise(){
  let thisPromiseCount = ++promiseCount;

  let log = document.getElementById('log');

  log.insertAdjacentHTML('beforeend',thisPromiseCount + ') Code Started (<small>Empieza el codigo sincrono</small>)<br/>');
  let promise = new Promise((resolve,reject) => {
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Dentro de la promesa, antes del timeout (<small>Empieza el código asíncrono</small>)<br/>');
    window.setTimeout(function() {
      // En este momento resolveremos la Promesa
      resolve(thisPromiseCount);
    }, Math.random() * 10000 + 1000);
  });

  // Para definir lo que queremos hacer si la promesa se resuelve, llamamos al metodo then()
  // Para definir lo que queremos hacer si la promesa se rechaza, llamamos al metodo catch()
  promise.then(function (data) {
    log.insertAdjacentHTML('beforeend', data + ') Codigo dentro del then (<small>Codigo Asincrono terminado</small>)<br />');
  })
  .catch(function (reason) {
    console.log(`Handle rejected promise(${reason} here.)`);
  });

  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Codigo debajo del then (<small>Codigo sincrono terminado</small>) <br />');
}

$(document).ready(function(){
  if("Promise" in window){
     let btn = document.getElementById("btn");
     btn.addEventListener("click",testPromise);
  } else {
    let log = document.getElementById('log');
    log.innerHTML = "Tu navegador no soporta Promesas.";
  }

});
