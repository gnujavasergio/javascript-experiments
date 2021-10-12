// Clase con un objeto como parametro
class Student {
    constructor({
                    firstName,
                    lastName,
                    username,
                    email,
                    twitter = undefined,
                    instagram = undefined,
                    facebook = undefined,
                    approvedCourses = [],
                    learningPath = []
                }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.twitter = twitter;
        this.instagram = instagram;
        this.facebook = facebook;
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
}

let sergio = new Student(
    {
        firstName: 'Sergio', lastName: 'ochoa', username: 'gnujavasergio', email: 'gnu.java.sergio@gmail.com'
    });
console.log(sergio);