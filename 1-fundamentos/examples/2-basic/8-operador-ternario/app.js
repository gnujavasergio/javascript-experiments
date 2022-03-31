// Sin utilizar el operador ternario
var heightInCM = 185;
var heightCategory = "";

if (heightInCM > 175) {
  heightCategory = "tall";
} else {
  heightCategory = "Short";
}
console.log(heightCategory);

// Utilizando el operador tenario
var hCategory = heightInCM > 175 ? "Tall" : "Short";
console.log(hCategory);

// Ternary
result = price < 1500 ? "'less than 1500'" : "'greater than 1500'";
console.log("ternary = " + result);
