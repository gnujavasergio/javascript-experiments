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
    constructor({name, hours, lang = 'es-ES', isFree = false, lessons = []}) {
        this.name = name;
        this.hours = hours;
        this.lang = lang;
        this.isFree = isFree;
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


class FreeStudent extends Student {

    constructor({
                    firstName,
                    lastName,
                    username,
                    email,
                    twitter = undefined,
                    instagram = undefined,
                    facebook = undefined,
                    _approvedCourses = [],
                    learningPath = []
                }) {
        super({firstName, lastName, username, email, twitter, instagram, facebook, _approvedCourses, learningPath});
    }

    addApprovedCourses(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.firstName}, solo puedes tomar cursos gratuitos.`);
        }
    }


    get approvedCourses() {
        return this._approvedCourses;
    }

    set approvedCourses(value) {
        this._approvedCourses = value;
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    addApprovedCourses(newCourse) {
        if (newCourse.lang !== 'en-GB') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.firstName}, no puedes tomar cursos en ingles.`);
        }
    }
}

class ExpertStudent extends Student {

    constructor(props) {
        super(props);
    }

    addApprovedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

let basica = new Course({name: 'Curso de programación Basica', hours: 3, isFree: true});
let htmlAndCss = new Course({name: 'Curso Definitivo de HMTL Y CSS', hours: 2});
let practiceHtmlAndCss = new Course({name: 'Curso Practico de HTML Y CSS', hours: 3, lang: 'en-GB'});
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


let expertSergio = new ExpertStudent(
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
expertSergio.addApprovedCourses(basica);
expertSergio.addApprovedCourses(unity);
console.log(expertSergio.approvedCourses);

let freeSergio = new FreeStudent(
    {
        firstName: 'Sergio',
        lastName: 'ochoa',
        username: 'gnujavasergio',
        email: 'gnu.java.sergio@gmail.com',
        learningPath: [
            escuelaWeb
        ]
    });
freeSergio.addApprovedCourses(basica);
freeSergio.addApprovedCourses(htmlAndCss);
console.log(freeSergio.approvedCourses);