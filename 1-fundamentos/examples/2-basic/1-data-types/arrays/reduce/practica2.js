const items = [1, 3, 2, 2, 3, 4, 5, 6, 7, 4, 5, 6];

const result = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj;
}, {})

console.log(result);