// Coerción implicita
var a = 4 + "7"; // "47"
typeof a; // "string"

var b = 4 * "7"; // 28
typeof b; // ""number

// Coercion Explicita
// String(value) y Number(value) son funciones explicitas
var a = 20;
var b = a + "";
typeof b; // "string"

var c = String(a);
typeof c; // "string"

var d = Number(c):
typeof d; // "number"

