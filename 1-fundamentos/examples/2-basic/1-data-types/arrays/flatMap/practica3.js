function countWords(array) {
    return array.map(item => item.split(' ')).flatMap(item => item.length).reduce((suma, number) => suma + number, 0);
}

const result = countWords([
        "Beautiful is better than ugly",
        "Explicit is better than implicit",
        "Simple is better than complex",
        "Complex is better than complicated",
    ]
);

console.log(result);