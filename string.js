// "",''
var x = 'div';

// length: to get the string length:
// arr[0]

console.log(x.length);


// escaping char: \ => turn the special char into string char

// \' \', \" \", 
var y = " I'm div \"high\" 126\\31 "
console.log(y);


// string can be object.

var f = new String('Divyansh');
console.log(typeof x, typeof f);


var g = 'Divyansh';

console.log(f == g) // true

var h = new String('Divyansh');
console.log(f == h)