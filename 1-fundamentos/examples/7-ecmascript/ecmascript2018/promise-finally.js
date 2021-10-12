const greet = (name) => {
    return new Promise((resolve, reject) => {
        (name)
        ? setTimeout(() => resolve(`Hello ${name}`), 3000)
        : reject(new Error('Test error'));
    });
}

greet('Sergio')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'));



