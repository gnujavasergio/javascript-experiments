const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newArray = [];
for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log(newArray);

const palabras = words.filter(item => item.length >= 6);
console.log(palabras);

console.log('---Array original---');
console.log(words);