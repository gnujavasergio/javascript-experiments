var age = 18;
if (age === 18) {
    console.log("Puedes votar, será tu 1ra votación");
} else if (age > 18) {
    console.log("Puedes vota de nuevo");
} else {
    console.log("Aun no puedes votar")
}

if (age === 18) {
    console.log('Es un adulto');
} else if (age < 12) {
    console.log('Es un niño');
} else if (age > 12 && age < 18) {
    console.log('Es adolesente');
} else if (age > 60) {
    console.log('Es un adulto mayor');
} 