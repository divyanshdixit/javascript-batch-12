// toString()
// toExponential()
// toFixed()
// toPrecision()

// js treats primitive value as objects when excuting methods and props.

// toExponential() => 
// to return the string with no. rounded and written using exponential notation.
// parameter define the no of char after decimal point.

var x = 234987654321;
console.log(x.toExponential(5))


// toFixed() => return a string, with the number written wiht the specified no after decimals.
var f = 9/7;
console.log(f)
console.log(f.toFixed(4))


// toPrecision() => return a string, with the number written with the specified length
var f = 9/7;
console.log(f)
console.log(f.toPrecision(4))


// valueOf()=> return a number objects as a primitve number.
// used to convert number objects to primtive value.

var v = new Number(10); // object number
var v = 10; // literals
console.log(typeof v)
console.log(typeof v.valueOf());


// Converting vairables to number:
// 3 methods:
// these are global methods not number methods, so they can be used with all js datatypes.

// Number();
// parseInt();
// parseFloat();

console.log(Number(true));


0, 1
// isInteger():

// prototype