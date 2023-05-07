const elements = ["hola", null, "como", "estas"]

let unir = ""
const separator = "/"
for (let i = 0; i < elements.length; i++) {
    const element = elements[i] ?? ""
    if (i !== elements.length - 1) {
        unir += element + separator
    } else {
        unir += element
    }
}
console.log(unir) // 'hola//como/estas'

const result = elements.join('/');
console.log(result);
