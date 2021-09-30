// padStart o padEnd
//
let title = 'JavaScript';
let newLenght = title.length + 5; // new tamaño del string que queremos contruir
console.log(title.padStart(newLenght,'-----'));
console.log(title.padEnd(newLenght + 5,'-----'));