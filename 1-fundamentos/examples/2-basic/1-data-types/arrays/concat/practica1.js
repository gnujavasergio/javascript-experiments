const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

// concat
const result = elements.concat(othersElements);
console.log('concat', result);

// Spread operation
const result1 = [...elements, ...othersElements];
console.log('Spread operation', result1);

// push
elements.push(...othersElements);
console.log('push', elements)




