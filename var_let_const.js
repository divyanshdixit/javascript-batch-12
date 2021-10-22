// let and const => es6(ECMA 2015) => Block scope

// JS => 1. Global scope, 2. Function scope(local scope)


var y = 20; // global scope

// block scope => variable with var keyword can't have block scope

{
    let x = 30;
    console.log(x);// 30
    console.log(y)
}

console.log(x)

// console.log(x); // gives error of undefined

console.log(y)

// **********************

// Re-declaration using let and var:

var l = 10;

console.log(l); // 10

{
    let l = 2;
    
    // var l = 4;
    console.log(l)// 4
}

var l = 20;
console.log(l) // 20

// Redeclaring a variable with var is allowed anywhere in the program.

// Re-decalring var variable with let and vice versa in same scope is not allowed 

var p=10;
let p = 20; // not allowed

{
    var p =30; // allowed
    let p =40; // not allowed
}


// Re-declare let variable with let in same scope is also nto allowed

let q = 2;
let q = 5; // not allowed

{
    let q = 6; // allowed
    let q = 10; // not allowed
}


// Re-declare let varibale with let in another scope is allowed

let w = 2;
const c = {
    fname:'Divyansh'
};
const c = 10; // not allowed

{
    let w = 9; // allowed
    const c = 2; // allowed
}

{
    let w = 10; // allowed
}

let w = 11; // not allowed



// difference in const and let:

// const => const f = 10; // "string", 10,

// in actual reference is constant not value 

// call by reference , call by value

// var f = 10;

// f => address ( reference ) 1000


// const g = 10;
// const g = {
//     lname:'Dixit'
// }




