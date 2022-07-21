const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

/**
 * Estados en el llamado de XMLHttpRequest
 *
 * 0 → Se ha inicializado.
 * 1 → Loading (cargando).
 * 2 → Se ha cargado.
 * 3 → Procesamiento si existe alguna descarga.
 * 4 → Completado.
 * @param url
 * @param callback
 */
function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(`Producto: ${data2.title}`);
            console.log(`Categoria: ${data3.name}`);
        });
    });
});