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

// get the constructor property: using varaibleName.constructor

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
// splice():

// can be used to add/delete element from array from any position.
// splice (position(where new elements should be added), how many should remove, {no of new items to be added})
// return the removed element as an array.
// change the original array.


var arr1 = [1,3,5,7,9];

// console.log(arr1.splice(1,0,2), arr1)
// console.log(arr1.splice(1,1,2), arr1)
console.log(arr1.splice(1,1), arr1)


var arrobj = [
    {name:'divyansh'},
    function(params) {
        
    },
    true,
    'false'
]

var returnObj = arrobj.splice(0,1);
console.log(returnObj[0].name);
console.log(arrobj);

// merging (concat) two or more array:

// concat()=> create new array by merging tow or more arrays.
// it also take any datatype as an argument.
// will not change original array.

const arr2 = [1,2,3];
const arr3 = [4,5,6];
const arr4 = [4,5,6];
console.log(arr2 + 7)
// 
console.log(arr2.concat(arr3, arr4, 7, {}, function (params) {}, 9), arr2);


// slice(start, end):
// slice out a part of array into new array
// start from given position
// it'll slice out till end index - 1; 
// if end index is omitted it'll slice out whole part of array.
// start and end index can be -ve also.

// will not change the original array .

var mergeArray = arr2.concat(arr3);
// [1,2,3,4,5,6]
console.log(mergeArray.slice(0,3)) // [1,2,3,4]
console.log(mergeArray.slice(1), mergeArray) // [1,2,3,4]

// prototype: used to add new prop or method in array.

var emptyArr = [];

function capitalletter(str){

    var arraysplit = str.split(' '); // arra
    return arraysplit.getCapitalLetter();
}

const name = () => {}

// anonymous function must define before calling;

Array.prototype.getCapitalLetter = function() {
    console.log(this);
    let txt = '';
    this.forEach((val) => {
        txt += val.slice(0, 1).toUpperCase() + val.slice(1) + " ";
    });
    
    return txt;
}
// console.log(arraysplit.getCapitalLetter())
// console.log( str.getCapitalLetter(str));
// sort():

// function capitalletter (str){

    
    // return arraysplit.getCapitalLetter();
// }
console.log(capitalletter('my name is divyansh'));


// copyWithin() => copiy the array element to another positon in same array(overwrite the exisint value).

// change original array.

// syntax: copyWithin(target, start, end)
// target=> index position to copy the element to.
// ending index not included.

var arr5 = [1,2,3,4];
arr5.copyWithin(1,0,2); // 123
console.log(arr5);

var g = [1,2,3];
g.copyWithin(2,0,3); // 123
console.log(g);
//  1,2,1,2, 5,6
//  1,2,1,2,3

// entries: return array iterator object with key/value pairs.
var u = arr5.entries()
console.log(u) // => return array iteratoir

// to get the items of iterator:

for(i of u){
    console.log(i);
}

// keys(): create an array iteraotr object only conatianing keys(index) of an array.

{
    let a = arr5.keys();
    for(i of a){
        console.log(i)
    }
}

// values(): create an array iteraotr object only conatianing values of an array.

{
    let a = arr5.values();
    for(i of a){
        console.log(i)
    }
}


// every(): check if all elements in array passes the given condition, if any value is false
// then every() return false else true.

// arrow function related :*****

// function nrml(n1){
//     console.log('something!');
//     return 'nrml function';    
// }

// var nrml = function(n1){ // anonymous function

// }

// var nrml = () => { 
//     console.log('something!');
//     return 'nrml function';    
// }

// nrml = 10;

// nrml();

// *******

console.log(arr5.every((val, index, array) => {
    return val < 5
}))


// filter() => return a new array filled with all array elements that passes given condition.

console.log(arr5.filter((currentval, index, array) => currentval < 5 ))

var age = [20,12,18,16,40];
let res = age.filter(val => {
    console.log(val,val>=18)
    return val >= 18;
})

console.log(res);


// find(): retrun the value of first element in array that passes a test.

let res1 = arr5.find(val => {
    return val == 4;
})

console.log(res1, arr5);

// findIndex(): retrun the index of first element in array that passes a test.

let res2 = arr5.findIndex(val => {
    return val == 4;
})

console.log(res2, arr5);


// includes():  check whether an array element contains a specific element or not, 
// return true if element exist else false.
// case senstive.
// includes(element, start) => earching start from given index., if omiited searching start from 0 index
// we can use regex as well.

{
    let arr = ['first', 2,3,4, 'last'];
    let res = arr.includes('last', 5);
    console.log(res);
}

// map() => retrun a new array with result of calling a function for each array element

{

let arr = [1,2,3,4,5]
let res = arr.map( (val, index, array)=> {
    return val * 2;
});

// arr.forEach(val => {
//     console.log(val *2);
// })

console.log(res, arr);
}


// reverse(): given array will be reversed, chnage the original array.


// reduce(): reduces the array to a single value.

// excute a  provided function for each value of the array(left to right).
// return value of the function is stored in an accumulator(variable).

// doesn't change the original array.
// arr.reduce(function(total, currentVal, index, arr){
//     // total = required => inittailvalue or previously returned value of the function
// }, initialValue);

// return the accumulated value of the function

{
    let res = arr5.reduce((total,val)=> {
        console.log(total, val);
        return total + val; 
    });
    console.log(res);
}

// sort(): 