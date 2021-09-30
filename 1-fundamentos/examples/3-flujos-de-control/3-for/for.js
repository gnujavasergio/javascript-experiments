// incrementar
for (var i = 0; i <= 10; i++) {
    console.log(`Numero ${i}`);
}
console.log("-------------------------------");

// Decrementar
for (var i = 10; i > 0; i--) {
    console.log(`Numero ${i}`);
}

let students = ['Rocio', 'Sergio', 'Daniel', 'Angel', 'Jhoel'];

function greetStudents(student) {
    console.log(`Hola ${student}`);
}

console.log("---------for----------");
for (let i = 0; i < students.length; i++) {
    greetStudents(students[i]);
}