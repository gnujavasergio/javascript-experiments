const helloPromise = (value) => {
    return new Promise((resolve, reject) => {
        (value) ? setTimeout(() => resolve('Hey!'), 3000) :
            reject(new Error('Test Error'));
    });
}

const helloAsync = async () => {
    try {
        const hello = await helloPromise(false);
        console.log(hello)
    } catch (error) {
        console.log(error);
    }

}
helloAsync();
