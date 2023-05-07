let students = ['Rocio', 'Sergio', 'Daniel', 'Angel', 'Jhoel'];

// Utilizando arrow function
students.forEach(student => greetStudents(student));

students.forEach(function (student) {
    greetStudents(student)
});