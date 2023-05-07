function greeting() {
    let username = 'gnujavasergio';
    console.log(username);
    if (username === 'Ana') {
        console.log(`Hola ${username}`);
    }
}

greeting();
console.log(username); // ReferenceError: username is not defined
