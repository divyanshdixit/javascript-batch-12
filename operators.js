// coming soon.
// datatype 


// Number => 1,2, 1.4, 4.5
// String => 'Divyanh', "2"
// Boolean
// Object
// null
// undefined

// (ctrl + /) => single line comment

/*
 multiple 
 line
 comment
*/


// list of all operators:

/*
1- airthmatic operator,
2- assignment 
3- string operator 
4- comparison operator 
5- logical operator 
6- ternary operator
7- type operator
8- Bitwise operator
*/

// 1- airthmatic operator: (+, -, *, /, %, ++, --, **(exponential))

var a = 10;
var b = 20;

console.log(b ** a);

// a++ => post increment => 10

// ++a => pre increment => 11

// b-- => post decrement
// --b => pre decrement

console.log(a); // 10
console.log(a++) // 10
console.log(a) // 11

console.log(a--) // 11
console.log(a) // 10

console.log(b++) // 20
console.log(b) // 21

console.log(b--) // 21
console.log(b) // 20


// 2- assignment (=)

// 3 - string operator (+) => to concatenate(combine) two or more strings

var f = "Divyansh";
var l = "Dixit";

console.log(f + " " + l)

console.log("10" + "20")
console.log("10" + 20)

// js excutes from left to right 
console.log( 10 + 20 + 30 + "10" + "20" + 30 + 40 + 50 )

// 60 + "10"
// "6010" + "20"
// "601020" + 30
// "60102030"

// '601020304050


// 4 - Comparison operator: (==, ===, !=, !==, >=, <=, > , <)

var q = "10"; // string
var w = 10; // number

//  ==   => compare only value of variable not data type
console.log( q == w) // true 

// ===   =>  compare both data type and value, if equal then return true else false
console.log( q === w) // false

// ! => not operator 


console.log(q != w)// "10" not equal to 10  => compare only value
console.log(q !== w)// "10" not equal equal to 10  => compare value and data type 


console.log(10 <= 9)


// 5 - logical operator: (&&, ||, !) => and , or, not

// 5 <= 9 10>=9

console.log( (5 <= 1) && (10>=9) )


// true && true => true
// true && false => false
// false && true => false
// false && false => false

console.log( (5 <= 1) || (10>=9) )

// true || true => true 
// true || false => true
// false || true => true
// false || false => false



// not operator (!) => reverse the result of any condition

console.log( !(5 <= 1) && !(10>=9)  || (12>13))


// 6- ternary operator (? :)

// (condition) ? 'true' : 'false' 

console.log( (10 < 3) ? 'true' : 'false')

// nested condition

console.log( (10 < 3) ? 'true' : (5 > 10 ? 'true 2 ' : 'false 2') )


// 7- typeof operator: (typeof , instance of ) => typeof will return the data type of varaible , 
// instance of will check the data type of given vairable( return true or false) (work only for object type variable)

var z = 10;
console.log(typeof z) // number, string

// console.log(z instanceof Number)