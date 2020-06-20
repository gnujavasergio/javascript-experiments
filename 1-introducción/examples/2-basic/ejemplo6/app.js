var value = 10;

// Pre
var x = 0;
console.log(++x); // 1
var y = value + (++x);
console.log(y); // 12

// Post
var b = 0;
console.log(b++); // 0 
var c = value + b; // 10 + 1
console.log(c); // 11