// js array used to store the multiple values in single varaible.
// it can store any data type. 

var arr = [ 100, 200, 300, '4' , 'Divyansh', {city:'kanpur'}, [ ], function (){}, true, false ];
// var arr = new Array();

// indexing start from 0 and goes further and always numerical.

// two type of array:

// index array (numerical indexing)
// associative array (object)

{
    name:'divyansh'
}

// [
//     name => 'divyansh'
// ]

// accessing the element of array: refer to the index of array.

console.log(arr[4], arr[5].city)

// changoing the value of array element.
arr[7] = function(){
    console.log('new function value!')
    return ''
}
console.log(arr[7]())

// new value assign to 0 index
arr[0] = 500;
console.log(typeof arr[0], typeof arr);


// deleting array element create an hole and gives undefined for that index.

delete arr[1];
console.log(arr);
console.log(arr[1])
