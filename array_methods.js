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

// isArray() => check whether a var is array or not: if so return true or false.
// it not supported in old browser.

console.log(Array.isArray(arr))