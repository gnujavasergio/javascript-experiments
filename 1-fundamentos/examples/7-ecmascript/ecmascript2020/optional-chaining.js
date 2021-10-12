const developer = {};
// Saldra error porque no tenemos ese parametro en el objeto
// console.log(developer.country.name);

// Solucion a esto se encuenta el optional chaining
console.log(developer?.country?.name);

if (developer?.country?.name) {
    console.log(developer?.country?.name)
} else {
    console.log('fail');
}

