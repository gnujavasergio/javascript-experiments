import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function create(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

const onError = (error) => console.log(error);

const onExecuteCategory = async (url, data) => {
    try {
        const category = await create(`${url}/categories`, data);
        console.log(category)
    } catch (error) {
        onError(error);
    }
}

let category = {
    name: "New Category",
    image: "https://placeimg.com/640/480/any"
};
onExecuteCategory(API, category);

const onExexuteProduct = async (url, data) => {
    try {
        const product = await create(`${url}/products`, data)
        console.log(product)
    }catch (error) {
        onError(error);
    }
}

const product = {
    title: 'Sergio product',
    price: 1000,
    description: 'A description',
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"]
};
onExexuteProduct(API, product);




