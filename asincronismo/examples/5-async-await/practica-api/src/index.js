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

const onExecute = async (url) => {
    try {
        const data = await fetchData(url);
        const character = await fetchData(`${url}/${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(character.name);
        console.log(data.info.count);
        console.log(origin.dimension);
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}

onExecute(API);
onExecute()