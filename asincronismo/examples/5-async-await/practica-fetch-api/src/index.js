import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
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