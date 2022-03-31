

function requestServer(query, callback){
    setTimeout(function(){
        let response = query + "lleno!";
        callback(response);
    },5000);
}

function getResult(results){
    console.log("Respuesta del servidor: " + results);
    
}

requestServer("El vaso está medio  ", getResult);