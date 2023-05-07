import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function create(url, data) {
    const response = fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    return response;
}

let category = {
    name: "New Category",
    image: "https://placeimg.com/640/480/any"
};
create(`${API}/categories`, category)
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error));

const product = {
    title: 'Sergio product',
    price: 1000,
    description: 'A description',
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"]
};

create(`${API}/products`, product)
    .then(response => console.log(response))
    .catch(error => console.log(error));



