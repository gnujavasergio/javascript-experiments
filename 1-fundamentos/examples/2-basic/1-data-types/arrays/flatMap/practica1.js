const users = [
    {userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    {userId: 2, username: "Mike", attributes: ["Lovely"]},
    {userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const result = users.flatMap(user => user.attributes);
console.log('flatMap',result);

const result1 = users.map(user => user.attributes).flat();
console.log('map y flat',result1);