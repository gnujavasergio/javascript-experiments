class Chapter {
    constructor({name, time, documents = []}) {
        this.name = name;
        this.time = time;
        this.documents = documents;
    }
}

class Lesson {
    constructor({name, time, chapters = []}) {
        this.name = name;
        this.time = time;
        this.chapters = chapters;

    }
}

class Course {
    constructor({name, hours, lessons = []}) {
        this.name = name;
        this.hours = hours;
        this.lessons = lessons;

    }
}

class LearningPath {
    constructor({name, courses = []}) {
        this.name = name;
        this.courses = courses;
    }
}

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

let basica = new Course({name: 'Curso de programación Basica', hours: 3});
let htmlAndCss = new Course({name: 'Curso Definitivo de HMTL Y CSS', hours: 2});
let practiceHtmlAndCss = new Course({name: 'Curso Practico de HTML Y CSS', hours: 3});
let unity = new Course({name: 'Curso de Unity 3D', hours: 6});
let unrealEngine = new Course({name: 'Curso de Unreal Engine', hours: 5});

let escuelaWeb = new LearningPath({
    name: 'Escuale de Desarrollo Web',
    courses: [
        basica,
        htmlAndCss,
        practiceHtmlAndCss
    ]
});

let escuelaVideoJuegos = new LearningPath({
    name: 'Escuela de Videos Juegos',
    courses: [
        basica,
        unity,
        unrealEngine
    ]
});


let sergio = new Student(
    {
        firstName: 'Sergio',
        lastName: 'ochoa',
        username: 'gnujavasergio',
        email: 'gnu.java.sergio@gmail.com',
        learningPath: [
            escuelaWeb,
            escuelaVideoJuegos
        ]
    });
console.log(sergio);