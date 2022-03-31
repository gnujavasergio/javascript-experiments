
let counter = 0;
setTimeout(() => {
    console.log('hola');
    counter++;
    const $timer = document.getElementById('timer');
    $timer.textContent(`Han pasado ${counter} segundos`);
},2000);