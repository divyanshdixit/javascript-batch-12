// js variable can hold many datatypes

// two types of values:

// primitive values  (immutable, not changed) => they don't have theri own props and method(function)

// non-primitive values (mutable , can change) => they have own props and methods

// Complex datatype: function(){} => js function are object 

//Primitve :
// var a = ;
// String 
// Number
// Boolean => true or false
// undefined => not recommend by js 

// Non-primitive:

// Object
// Array => they are special kind of objects
// datatype of array, object and null is an object.

// Null

// var json = {
//     "key":"value"
// }

const y = {
    // key: value
    fname:"Divyansh",
    lname:'Dixit'
} // 1001

// y = '10'

// const x = 10;


var x; 
console.log(typeof x)

var c = 10;

var c = null; // js doesn't recommend 
var d ;

console.log(c == d)

console.log( typeof null , typeof undefined, typeof function(){})
console.log(null == undefined, null === undefined)
console.log(c)


// Hoisting:- variable declartion are hoisted to the top and that variable can be initalized at any time.

// we can use variable before it is declared.

// let, var , const


console.log(o);

var o = 10;
console.log(o);


name = 'Divyansh';
// window.alert(name);
var name;


// let hoisting:

// variable declartion are hoisted to the top and that variable can not be initalized.

// using let variable before it is declared gieves reference error: of initialization

// city = "kanpur";
// console.log(city);
// let city;


// const hoisting:

// variable declartion are hoisted to the top and that variable can not be initalized.
// using const variable before it is declared gieves reference error: of initialization

// const varaible must be asigned a value whehn they are declared.

/*

not asigning a value to const while declartion gives syntax error:

const x;
x = 10; // not possible (syntax error)
*/

// console.log(age);
// const age = 10;


// const c  = 10;
// c = 20; // 

// console.log(c); 

const obj = { // object {name:}
    name:'div'
}
// reference constant , 

// 10 , 1000

// 20, 1001

obj.city = 'city'

console.log(obj);
