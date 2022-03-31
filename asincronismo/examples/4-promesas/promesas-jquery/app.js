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

const onError = (id) => console.log(`Sucedio un error. No se puede obtener el personaje ${id}`);

getPeople(1)
    .then(function (person) {
        console.log(`Hola, yo soy ${person.name}`)
    })
    .catch(function (id) {
        console.log(`Sucedio un error. No se puede obtener el personaje ${id}`)
    });

getPeople(2)
    .then(function (person) {
        console.log(`Hola, yo soy ${person.name}`)
    })
    .catch(function (id) {
        onError(id)
    });

getPeople(3)
    .then(function (person) {
        console.log(`Hola, yo soy ${person.name}`)
    })
    .catch(onError); // Solo se tiene que mandar la funcion

