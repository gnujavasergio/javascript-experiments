import {Student} from "./bean/student.js";
import {greet} from "./bean/greet.js";

let sergio = new Student('Sergio', 'Ochoa', 175);
console.log(sergio.greet());

greet();