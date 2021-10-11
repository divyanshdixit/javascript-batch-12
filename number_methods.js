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
console.log(typeof 10)
console.log(typeof v.valueOf());


// Converting vairables to number:
// 3 methods:
// these are global methods not number methods, so they can be used with all js datatypes.

// Number();
// parseInt();
// parseFloat();


// Number():
// return the number converted from its argument.
var y = '20';
console.log(Number('true')) // nan
console.log(Number('10')) // 10
console.log(Number(' 10 ')) // 10
console.log(Number('Divyansh 10 20')) // nan
console.log(Number('10 20 30')) // nan
console.log(Number('__10'))// nan
console.log(Number(10.33)) // 10.33
console.log(Number('10, 20, 30')) // nan
console.log(Number({age:10})) // nan
console.log(Number(false)) // 0
console.log(Number(true)); // 1
console.log(Number(new Date('2021-10-11'))); // timestamp (milisecond) counting start from 1 jan 1970.
console.log(Number(y)) // 20



// parseInt(): 
// parse a string and return a whole(integer) number.
// spaces are allowed.
// only the first number returned.

console.log(parseInt('true')) // nan
console.log(parseInt('10')) // 10
console.log(parseInt(' 10 ')) // 10
console.log(parseInt('Divyansh 10 20')) // nan
console.log(parseInt(' 10 years old')) // 10
console.log(parseInt('10 20 30')) // 10
console.log(parseInt('10__'))// 10
console.log(parseInt(10.53)) // 10
console.log(parseInt('10, 20, 30')) // 10
console.log(parseInt({age:10})) // nan
console.log(parseInt(false)) // nan
console.log(parseInt(true)); // nan
console.log(parseInt(new Date('2021-10-11'))); // nan
console.log(parseInt(y)) // 20


// parseFloat(): 
// parse a string and return a number.
// spaces are allowed.
// only the first number returned.

console.log(parseFloat('true')) // nan
console.log(parseFloat('10')) // 10
console.log(parseFloat(' 10 ')) // 10
console.log(parseFloat('Divyansh 10 20')) // nan
console.log(parseFloat(' 10 years old')) // 10
console.log(parseFloat('10 20 30')) // 10
console.log(parseFloat('10__'))// 10
console.log(parseFloat(10.53)) // 10
console.log(parseFloat('10, 20, 30')) // 10
console.log(parseFloat({age:10})) // nan
console.log(parseFloat(false)) // nan
console.log(parseFloat(true)); // nan
console.log(parseFloat(new Date('2021-10-11'))); // nan
console.log(parseFloat(y)) // 20


// number properties:

// number props can't be used on variables or it'll return undefined

/*
MAX_VALUE
MIN_VALUE
POSITIVE_INFINITY
NEGATIVE_INFINITY
NaN
*/

var z = 10;

console.log(z.MAX_VALUE)// undefined 
console.log(Number.MAX_VALUE) // 2^53 or 1.79e+308
console.log(Number.MIN_VALUE) // 2^52 or 5E-324
console.log(Number.NEGATIVE_INFINITY) // 2^52 or 5E-324


0, 1
// isInteger():
// check wether a vlaue is integer or not, if so return true else false.
// 9999999999999 15 digits, above 15 digits not safe integer.

console.log(Number.isInteger(10.2))
console.log(Number.isSafeInteger(999999999))

// prototype: to add new prop or method in current data type.

// "true","false" => return 1, 0
Number.prototype.changeBooleanString = function(bstr){
    console.log(bstr);
    if(bstr.value === 'true'){
        return 1;
    }else if(bstr.value === 'false'){
        return 0;
    }else{
        return NaN;
    }
}
var obj = {
    value:"true"
};
var num = 0;
console.log(num.changeBooleanString(obj))