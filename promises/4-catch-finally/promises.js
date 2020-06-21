// $(document).ready(function() {
//   console.log('Antes de la petición');
//   $.get('https://reqres.in/api/user').then((data) => {
//       console.log('dentro del then');
//       console.log(data);
//   }).catch((data) => {
//     console.log('dentro del catch');
//     console.log(data);
//   });
//   console.log('despues de la peticion');
// });

// finally() - ¡NO RECIBE PARÁMETROS! - NO es soportado por algunos navegadores
$(document).ready(function() {
  console.log('Antes de la petición');
  let isLoading = true;
  fetch('https://reqres.in/api/users').then((data) => {
      console.log('dentro del then');
      console.log(data);
  }).catch((data)=>{
    console.log('dentro del catch');
    console.log(data);
  }).finally(() => {
    isLoading = false;
    if(isLoading){
      console.log('se oculto el loading');
    }
  });


  console.log('despues de la peticion');
});
