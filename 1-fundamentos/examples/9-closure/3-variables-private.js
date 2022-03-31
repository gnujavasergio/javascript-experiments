const developer = () => {
    let firstName = 'Sergio';
    let lastName = 'Ochoa';

    return {
        getFirstName: () => {
            return firstName;
        },
        setFirstName: (name) => {
            firstName = name;
        },
        getLastName: () => {
            return lastName;
        },
        setLastName: (lastName) => {
          lastName = lastName;
        }
    }
}

devSergio = developer();
console.log(devSergio.getFirstName());
devSergio.setFirstName('Rocio');
console.log(devSergio.getFirstName());

