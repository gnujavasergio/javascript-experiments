let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.onreadystatechange = function (event) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    const error = new Error('Error ' + url);
                    reject(error);
                }
            }
        }
        xhttp.send();
    });
}

const onError = (error) => console.log(error);

const onExecute = async (url) => {
    try {
        const products = await fetchData(`${url}/products`);
        const product = await fetchData(`${url}/products/${products[0].id}`);
        const category = await fetchData(`${url}/categories/${product?.category?.id}`);
        console.log(products[0]);
        console.log(`Producto: ${product.title}`);
        console.log(`Categoria: ${category.name}`);
    } catch (error) {
        onError(error);
    }
}

onExecute(API);
onExecute();