let person = {
    firstName: 'Sergio',
    lastName: 'Ochoa',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

let developer = {
    firstName: 'Sergio',
    lastName: 'Ochoa',
}

let fullName = person.fullName.bind(developer);
console.log(fullName());