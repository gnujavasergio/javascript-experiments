// Swich normal o simple
let productId = 2;
switch (productId) {
    case 1:
        console.log("Camisa - Black, 58");
        break; // Sirve para salir del caso
    case 2:
        console.log("Polera, Red");
        break;
    case 3:
        console.log("Corto, M");
        break;
    default: // Declaración si es que no hay coencidencias
        console.log("Producto desconocido");
        break;
}

// Default en cualquier lugar
let productId = 200;
switch (productId) {
    default:
        console.log("Producto desconocido");
        break;
    case 1:
        console.log("Camisa - Black, 58");
        break;
    case 2:
        console.log("Polera, Red");
        break;
    case 3:
        console.log("Corto, M");
        break;
}


// Multiple case
let color = "Red";
switch (color) {
    case "Red":
    case "Pink":
        console.log("The color is red");
        break;
    case "Blue":
    case "Light Blue":
    case "Dark Blue":
        console.log("The color is blue");
        break;
    case "Gray":
    case "Grey":
        console.log("The color is grey");
        break;
    default:
        console.log("Unknown color");
        break;
}

// Obligar el break
let productId = 2;
switch (productId) {
    case 1:
        console.log("Camisa - Black, 58");
        break;
    case 2:
        console.log("Polera, Red");
    case 3:
        console.log("Corto, M");
        break;
    default:
        console.log("Unknown product");
        break;
}

// Comparación estricta
let productId = "2";
switch (productId) {
    case 1:
        console.log("HL Road Frame - Black, 58");
        break;
    case 2:
        console.log("Sport-100 Helmet, Red");
        break;
    case 3:
        console.log("Mountain Bike Socks, M");
        break;
    default:
        console.log("Unknown product");
        break;
}

// NOTE: Comente esto para que todas las demás funciones funcionen
// Problema al trabajar con bloques
// let productId = 2;
// switch (productId) {
//     case 1:
//         let message = "HL Road Frame - Black, 58";
//         console.log(message);
//         break;
//     case 2:
//         let message = "Sport-100 Helmet, Red";
//         console.log(message);
//         break;
//     case 3:
//         let message = "Mountain Bike Socks, M";
//         console.log(message);
//         break;
//     default:
//         let message = "Unknown product";
//         console.log(message);
//         break;
// }

// Solución para trabajar con bloques y tener en cada case un scope.
let productId = 2;
switch (productId) {
    case 1: {
        let message = "HL Road Frame - Black, 58";
        console.log(message);
        break;
    }
    case 2: {
        let message = "Sport-100 Helmet, Red";
        console.log(message);
        break;
    }
    case 3: {
        let message = "Mountain Bike Socks, M";
        console.log(message);
        break;
    }
    default: {
        let message = "Unknown product";
        console.log(message);
        break;
    }
}
