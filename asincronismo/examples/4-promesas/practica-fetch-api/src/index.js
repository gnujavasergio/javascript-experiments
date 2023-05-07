import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url) {
    return fetch(url).then(response => response.json());
}

const onError = (error) => console.log(error);

fetchData(`${API}/products`)
    .then(products => {
        let product = products[0];
        console.log(product);
        return fetchData(`${API}/products/${product.id}`);
    })
    .then(product => {
        console.log(`Producto: ${product.title}`);
        return fetchData(`${API}/categories/${product?.category?.id}`);
    })
    .then(category => {
        console.log(`Categoria: ${category.name}`);
    })
    .catch(onError).finally('Finally');