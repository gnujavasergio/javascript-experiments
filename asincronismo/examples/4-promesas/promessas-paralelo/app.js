const API_URL = 'https://swapi.dev/api';
const PEOPLE_URL = 'people/:id';

function getPeople(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}/${PEOPLE_URL.replace(':id', id)}`;
        const opts = {crossDomain: true};
        $.get(url, opts, function (data) {
            resolve(data);
        }).fail(() => reject(id));
    });
}



const ids = [1, 2, 3, 4, 5, 6, 7];

let promises = ids.map(id => getPeople(id));

Promise
    .all(promises)
    .then(response => console.table(response))
    .catch(onError);

