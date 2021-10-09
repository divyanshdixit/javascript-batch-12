// Number => 64 bit floating point .


// integers are accurate upto 15 digits.
// limit is 2^53


var x = 9999999999999999;
console.log(x);

// js try to convert string to numbers in all numeric operation, except +

var a = 10;
var b = "20";

console.log( Number("30"))

// tostring()

console.log(b/a);


// NAN: not a number:

// when we do airthmatic operation with non-numeic string, it gives NAN.

console.log(typeof ("object"/2))


// isNaN(): to find out if a vlaue is number or not
// if value is not a number (nan), returns true
// typeof of NaN is number.

console.log(isNaN("object"/2))
console.log(typeof NaN);

console.log(-Infinity)
// Infinity