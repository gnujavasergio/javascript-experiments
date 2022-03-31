let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character';


const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.onreadystatechange = function (event) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    const error = new Error('Error ', url);
                    reject(error)
                }
            }
        }
        xhttp.send();
    });
}

const onError = (error) => console.log(error);

fetchData(API)
    .then(response => {
        console.log(response.info.count);
        return fetchData(`${API}/${response.results[0].id}`);
    })
    .then(response => {
        console.log(response.name);
        return fetchData(response.origin.url);
    })
    .then(response => {
        console.log(response.dimension);
    })
    .catch(onError);
