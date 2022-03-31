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
        return getPeople(2)
    })
    .then(person => {
        console.log(`Hola, yo soy ${person.name}`)
        return getPeople(3)
    })
    .then(person => {
        console.log(`Hola, yo soy ${person.name}`)
        return getPeople(4)
    })
    .then(person => {
        console.log(`Hola, yo soy ${person.name}`)
        return getPeople(-8)
    })
    .then(person => {
        console.log(`Hola, yo soy ${person.name}`)
        return getPeople(6)
    })
    .then(person => {
        console.log(`Hola, yo soy ${person.name}`)
        return getPeople(7)
    })
    .then(person => {
        console.log(`Hola, yo soy ${person.name}`)
    })
    .catch(onError);

