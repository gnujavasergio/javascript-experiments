let developer = {
    'firstName': 'Sergio',
    'lastName': 'Ochoa',
    'age': 33,
    'country': 'BO'
}
// Destructurar una variable con spread operator
let { firstName, ...information } = developer;
console.log(`name: ${firstName}`);
console.log(`additional information: `, information);
