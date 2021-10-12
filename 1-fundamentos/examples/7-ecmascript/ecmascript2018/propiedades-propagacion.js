let java = {
    name: 'Java',
    type: 'Compilado'
};

let javascript = {
    name: 'JavaScript',
    type: 'Interpretado'
};

let bolivia = {
    name: 'Bolivia',
    code: 'BO'
}

let person = {
    firstName: 'Sergio',
    lastName: 'Ochoa',
    age: 33,
    bolivia
}

let devSergio = {
    ...person,
    proffesion: 'Ingeniero de Sistemas',
    favoriteLanguage: 'Java',
    languages: [
        {...java},
        {...javascript}
    ]
}

console.log(devSergio);