const helloPromise = (value) => {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise(false)
    .then(response => console.log(response))
    .catch(error => console.log(error));