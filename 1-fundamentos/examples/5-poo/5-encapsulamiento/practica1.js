class Chapter {
    constructor({name, time, documents = []}) {
        this._name = name;
        this._time = time;
        this._documents = documents;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }

    get documents() {
        return this._documents;
    }

    set documents(value) {
        this._documents = value;
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
        this._name = name;
        this._hours = hours;
        this._lessons = lessons;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        this._hours = value;
    }

    get lessons() {
        return this._lessons;
    }

    set lessons(value) {
        this._lessons = value;
    }
}

class LearningPath {
    constructor({name, courses = []}) {
        this._name = name;
        this._courses = courses;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get courses() {
        return this._courses;
    }

    set courses(value) {
        this._courses = value;
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
        this._firstName = firstName;
        this._lastName = lastName;
        this._username = username;
        this._email = email;
        this._twitter = twitter;
        this._instagram = instagram;
        this._facebook = facebook;
        this._approvedCourses = approvedCourses;
        this._learningPath = learningPath;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get twitter() {
        return this._twitter;
    }

    set twitter(value) {
        this._twitter = value;
    }

    get instagram() {
        return this._instagram;
    }

    set instagram(value) {
        this._instagram = value;
    }

    get facebook() {
        return this._facebook;
    }

    set facebook(value) {
        this._facebook = value;
    }

    get approvedCourses() {
        return this._approvedCourses;
    }

    set approvedCourses(value) {
        this._approvedCourses = value;
    }

    get learningPath() {
        return this._learningPath;
    }

    set learningPath(value) {
        this._learningPath = value;
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