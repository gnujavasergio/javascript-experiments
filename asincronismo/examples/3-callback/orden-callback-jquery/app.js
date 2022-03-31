const API_URL = 'https://swapi.dev/api';
const PEOPLE_URL = 'people/:id';

function getPeople(id, callback) {
    console.log(id);
    const url = `${API_URL}/${PEOPLE_URL.replace(':id', id)}`;
    const opts = {crossDomain: true};
    $.get(url, opts, function (person) {
        console.log(`Hola, yo soy ${person.name}`);
        if (callback) { // Diferente de undefind
            callback();
        }
    });
}

// Callback help
getPeople(1, function () {
    getPeople(2, function () {
        getPeople(3, function () {
            getPeople(4, function () {
                getPeople(5, function () {
                    getPeople(6, function () {
                        getPeople(7);
                    });
                });
            });
        });
    });
});

