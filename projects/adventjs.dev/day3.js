const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// function distributeGifts(packOfGifts, reindeers) {
//     const pack = packOfGifts.reduce((result, item) => result += item.length, 0);
//     const renos = reindeers.reduce((result, item) => result += item.length * 2, 0);
//     const result = parseInt(renos / pack);
//     return result;
// }

function distributeGifts(packOfGifts, reindeers) {
    let pack  = packOfGifts.join("").length * 1;
    let renos = reindeers.join("").length * 2;
    return Math.trunc(renos / pack);
}


// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

// console.log(distributeGifts(packOfGifts, reindeers)) // 2
console.log(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))