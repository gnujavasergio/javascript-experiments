/*
    let route1 = location.hash; // #/1/
    let route2 = location.hash.slice(1); // eliminamos el primer elemento /1/
    let route3 = location.hash.slice(1).toLocaleLowerCase().split('/'); // ['', '1', ''];
    let route4 = location.hash.slice(1).toLocaleLowerCase().split('/')[1]; // 1
*/
const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

let saludo = 'hola'.tolow
export default getHash