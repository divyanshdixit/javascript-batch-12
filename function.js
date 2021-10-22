// regular function , nrml function
// hoisting works in function same as in var 

function name(){
    // validation
    console.log('object')
}

var x = 10;
console.log(x);

// provoke or call
name();

// function is an object in js. function , no such data type in js 

// all function in js has props of an object
// prototype

console.log(typeof name);


function add(x,y,z=0){ // define parameters
    // z= undefined, null + 5
    let res = x + y + z;
    return `the sum of ${x} and ${y} is ${res}`;
}

// add(3,2);
console.log(add(3,2)) // call arguments

// var res = add(3,2); // function result can be saved in varaible
// console.log(res);


// console.log(`the sum of x and y is ${res}`)
// console.log(`the sum of x and y is ${add(3,2)}`)
// 'Divyansh' + 'Dixit' + res

// 'my name is ' + name + ' , my age is ' + age + ' , i live in ' + city
 
// // es6 template literals

// ` my name is ${name} , my age is ${age}, i live in ${city} `

// `masdsadasdasdas sadasdsad asdasds das`
// // teranary opertor ? :

// // true ? 'true' : 'false'
// ` ${name ? `${name}` : `No name`} `

var city = 'kanpur';
console.log(`${ (city=='kanpur') ? `i live in ${city}` : 'No name of city'}   `)

