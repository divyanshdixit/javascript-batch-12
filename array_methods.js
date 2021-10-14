// 1- length property:

// arrName.length => return the count of array element
// lastInde = arrayLENGHT -1 ;

// looping through the array elements:
var arr = [10,20,30,40,50];

for(let i=0; i<arr.length ; i++){
    console.log(arr[i]);
}

// 2- forEach(): looping throgh each array element.,it's a function not loop.

// callback => a function called inside another function as an argument.
// callback are always anonymous fucntion

// callback func gets 3 arguments => currentVal, index, currentArray
// forEach is the only function which not return any value, rest all are return somethign.

// val index arr
// var h1 = document.getElementById('demo-heading');
// var total = arr.forEach(function(currentVal, index, currentArray){
//     console.log(currentVal, index, currentArray);
//    let h2 = document.createElement('h1'); // <h1> 10 </h1>
//    h2.innerHTML = `${currentVal}`;
//     h1.append(h2);
// });



// 3- adding array elements:-

// 3A- push(newElement) => it adds new element in the last index, return the new lenght of the array.
// change the orginal array


var result = arr.push(60);
console.log(result);

// lastIndex = arr.length;
// arr[arr.length]

arr[arr.length] = 70;
console.log(arr, arr.length)


arr[arr.length] = 80;
console.log(arr, arr.length)

// adding elements with higher index can create undefined holes in array.

arr[10] = 100;
console.log(arr[9]);
console.log(arr, arr.length);


// 4- check whether a var is array or not:

// 1- isArray() => check whether a var is array or not: if so return true or false.
// it not supported in old browser.

console.log(Array.isArray(arr));

// var x = 'asdsa';
// 2- Custom function :

// console.log('object'.constructor)
// console.log(arr.constructor)

// function customFun(params) {
//     this.name = 'divyansh'
//     console.log('custom function')
// }

// const h = new customFun(); // object/instance
// const j = new customFun(); // object/instance
// console.log(h, j.constructor);

function checkArray(array){
    return array.constructor.toString().indexOf('Array') > -1
}
// console.log('arr'.constructor.toString().indexOf('String'))
console.log(checkArray(arr));

// instanceof - true if an object is created by a given constructor.
// instanceof works on object .

var g = new String('23'); // creating a object
console.log(g instanceof String);


// converting a array to string:

// toString():

console.log(arr.toString());

// join(delimeter/seprator): 

// \n => for new line ;

console.log(arr.join('\n'))


// popping and pushing: 

// push(): , pop() => remove the last element from the array, return the poped out element;

console.log(arr.pop(), arr);

// shifting: it is alomost equal to pop.

// but used for first element of array.
// shift() => remove the first array element & shifts all element from higher to lower index.
// return the shifted out element.

console.log(arr.shift(), arr);

// unshift() => equivalent to push, 
// add new element at the starting of array and unshift older elements, to higher index
// return the new lenght of array.

arr.unshift(200)
arr.unshift(100)
arr.unshift(300)
console.log(arr);


// deleting the array element:
splice ()


