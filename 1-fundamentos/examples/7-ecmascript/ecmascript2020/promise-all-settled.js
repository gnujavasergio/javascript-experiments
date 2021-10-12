const promise1 = new Promise((resolve, reject) => resolve('resolve 1'));
const promise2 = new Promise((resolve, reject) => reject('reject'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 2'));

// Espera que todas las promesas se ejecuten aunque haya un error
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Si existe una promesa que devuelve un error ahi termina y directamente se va al catch
Promise.all([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error));