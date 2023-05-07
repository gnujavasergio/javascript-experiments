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

fetchData(`${API}/products`).then(response => {
    console.log(response[0]);
    return fetchData(`${API}/products/${response[0].id}`);
}).then(response => {
    console.log(`Producto: ${response.title}`);
    return fetchData(`${API}/categories/${response?.category?.id}`);
}).then(response => {
    console.log(`Categoria: ${response.name}`);
}).catch(onError).finally('Finally');