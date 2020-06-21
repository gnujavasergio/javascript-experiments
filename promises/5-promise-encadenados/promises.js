// $(document).ready(function() {
//   console.log('Antes de la petición');
//   let promise = $.get('https://reqres.in/api/user');
//
//   promise.then((data) => {
//       console.log('dentro del primer then');
//       console.log(data);
//   });
//
//   promise.then((data) => {
//       console.log('dentro del segundo then');
//       console.log(data);
//   });
//
//   promise.then((data) => {
//       console.log('dentro del tercero then');
//       console.log(data);
//   });
//
//   console.log('despues de la peticion');
// });

// 3 llamadas a .then() encadenadas (si no hacemos return, a las siguientes no les llega nada)
// $(document).ready(function() {
//   console.log('Antes de la petición');
//   $.get('https://reqres.in/api/user')
//   .then((data) => {
//       console.log('dentro del primer then');
//       console.log(data);
//   }).then((data) => {
//       console.log('dentro del segundo then');
//       console.log(data);
//   }).then((data) => {
//       console.log('dentro del tercero then');
//       console.log(data);
//   });
//
//   console.log('despues de la peticion');
// });

// 3 llamadas a .then() encadenadas, y cada una modificando el valor que le llega a la siguiente
$(document).ready(function() {
  console.log('Antes de la petición');
  $.get('https://reqres.in/api/user')
  .then((result) => {
      console.log('dentro del primer then');
      console.log(result);
      //return result.data;
      return Promise.resolve(result.data)
      //return new Promise((resolve, reject) => {
      //  resolve(result.data);
      //})
  }).then((result) => {
      console.log('dentro del segundo then');
      console.log(result);
      return result[0];
  }).then((result) => {
      console.log('dentro del tercero then');
      console.log(result);
  });

  console.log('despues de la peticion');
});
