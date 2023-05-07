// Template String
const firstName = 'Sergio Antonio';
const lastName = 'Ochoa Martinez';
const age = '25';
let fullName = `${firstName} ${lastName}`;

function template(strings, name, age) {
    let str0 = strings[0]; // "Yo me llamo "
    let str1 = strings[1]; // " y es "

    let value;
    if (age > 90){
        value = 'viejo';
    } else {
        value = 'joven';
    }

    return `${str0}${name}${str1}${value}`;
}

const result =  template `Yo me llamo ${firstName} y es ${age}`;
console.log(result);