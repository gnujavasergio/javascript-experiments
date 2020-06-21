// $(document).ready(function() {
//   console.log('Antes de la petición');
//   $.get('https://reqres.in/api/users').then((data) => {
//       console.log('dentro del then');
//       console.log(data);
//   });
//   console.log('despues de la peticion');
// });

$(document).ready(function() {
  console.log('Antes de la petición');
  fetch('https://reqres.in/api/users').then((data) => {
      console.log('dentro del then');
      console.log(data);
  });
  console.log('despues de la peticion');
});
