let price = 200;

// AND (&&) Operator
if (price > 10 && price < 1600) {
    console.log("price > 10 && price < 1600 is 'true'");
}

// Operador AND (&&)
if (price > 10 && price < 200) {
    console.log("price > 10 && price < 200 is 'true'");
} else {
    console.log("price > 10 && price < 200 is 'false'");
}

// Operador OR (||)
if (price > 10 || price < 1600) {
    console.log("price > 10 || price < 1600 is 'true'");
}

// Operador OR (||)
if (price > 10 || price > 1600) {
    console.log("price > 10 || price > 1600 is 'true'");
}

// Operador NOT (!)
if (!(price < 10)) {
    console.log("!(price < 10) is 'true'");
}
