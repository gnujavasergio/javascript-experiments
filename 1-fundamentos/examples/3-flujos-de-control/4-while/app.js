var students = ['Rocio', 'Sergio', 'Daniel', 'Angel', 'Jhoel'];

function greetStudents(student) {
    console.log(`Hola, ${student}`);
}

console.log("---------while----------");
while(students.length > 0) {
    var student = students.shift();
    greetStudents(student);
}

var teachers = ['Sergio', 'Angel', 'Daniel', 'Diego'];
function greetTeachers(teacher) {
    console.log(`Hola, ${teacher}`);
}

console.log("--------do-while-----------");
do {
    var teacher = teachers.shift();
    greetTeachers(teacher)
} while (teachers.length > 0);