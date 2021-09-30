let developer = {
    firstName:'Sergio Antonio',
    lastName: 'Ochoa Martinez',
    age: '34',
    fullName: function () {
        return `${firstName} ${lastName}`;
    }
}

for (let key in developer) {
    console.log(developer[key]);
}