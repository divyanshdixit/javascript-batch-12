// this => referes its owner object
// 6
this;

function sum(){
    return this;
}
console.log(sum(), window.sum())

Object.property
var x = 10;
console.log(x, window.x)

