let sergio = new Object();
sergio.username = 'gnujavasergio';
sergio.firstName = 'Sergio Antonio';
sergio.lastName = 'Ochoa Martinez';
sergio.phone = '71111111';
sergio.isPro = true;
sergio.age = 33;
sergio.fullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}

sergio.fullName();
console.log(sergio);
