try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    welcome();
} catch {
    console.log("esto es un error")
}