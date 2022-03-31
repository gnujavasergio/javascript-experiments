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

const onExecute = async () => {
    try {
        let message = await welcome('Sergio');
        console.log(message);
    } catch (error){
        console.log(error.message);
    }
}

onExecute();

const onExecute1 = async () => {
    try {
        let message = await welcome();
        console.log('Error:' + message);
    } catch (error){
        console.log(error.message);
    }
}

onExecute1();