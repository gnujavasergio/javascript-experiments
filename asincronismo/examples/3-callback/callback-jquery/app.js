const API_URL = 'https://swapi.dev/api';
const PEOPLE_URL = 'people/:id';

const callbackPeopleResponse = (person) => console.log(`Hola, yo soy ${person.name}`);

function getPeople(id) {
    const url = `${API_URL}/${PEOPLE_URL.replace(':id',id)}`;
    const opts = {crossDomain: true};
    $.get(url, opts, callbackPeopleResponse);
}

getPeople(1);
getPeople(2);
getPeople(3);

