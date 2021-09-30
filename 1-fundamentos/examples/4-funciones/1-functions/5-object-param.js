// Funcion con parametros
function login({username, password = '123456', phone = ''}) {
    console.log(username);
    console.log(password);
    console.log(phone);
}

login({username: 'gnujavasergio'});
login({username: 'sochoa', password: 'admin', phone: '73411111'});

