// Valores falsos
var value0 = Boolean(); // false
var value1 = Boolean(0); // false
var value2 = Boolean(null); // false
var value3 = Boolean(NaN); // false
var value4 = Boolean(undefined); // false
var value5 = Boolean(false); // false
var valor6 = Boolean(""); // false

// Valores verdaderos
var valor6 = Boolean("a"); // true
var valor7 = Boolean(1); // true
var valor8 = Boolean([]); // true
var valor9 = Boolean({}); // true
var valor10 = Boolean(function(){}); // true
var valor11 = Boolean(true); // true
