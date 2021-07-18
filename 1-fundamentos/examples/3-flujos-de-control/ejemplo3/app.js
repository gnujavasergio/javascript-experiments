// incrementar
for (var i = 0; i <= 10; i++) {
    console.log(`Numero ${i}`);
}
console.log("-------------------------------");

// Decrementar
for (var i = 10; i > 0; i--) {
    console.log(`Numero ${i}`);
}

var students = ['Rocio', 'Sergio', 'Daniel', 'Angel', 'Jhoel'];

function greetStudents(student) {
    console.log(`Hola ${student}`);
}

console.log("---------for----------");
for (var i = 0; i < students.length; i++) {
    greetStudents(students[i]);
}

console.log("--------for...of-----------");
for (var student of students) {
    greetStudents(student);
}

console.log("---------forEach with Arrow function----------");
// Utilizando arrow function
students.forEach(student => greetStudents(student));

console.log("---------forEach----------");
students.forEach(function (student) {
    greetStudents(student)
});