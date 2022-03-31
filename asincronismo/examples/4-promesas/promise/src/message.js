const welcome = (name) => {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Hola ${name}`);
        } else {
            const error = new Error('No mando el nombre para saludarlo');
            reject(error);
        }
    })
}

const onError = (error) => console.log(error);

welcome('Sergio')
    .then(reponse => console.log(reponse))
    .catch(onError);

welcome()
    .then(reponse => console.log(reponse))
    .catch(onError);