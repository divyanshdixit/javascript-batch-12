var x = {
    name : 'Divyansh',
    age: 25,
    n1:10,
    n2:20,
    subtract:function (){
        return this;
    },
    getName:function(){
        console.log('getting name')
        return '';
    },
    add:function(x,y){
        return x + y;
    },
    sum:function(){
        return this.n1 + this.n2
    }
}


// object literals

// object has properties and methods(function) (key : value pair)

// accessing the property of an obejct:

// 1- ObjectName.propertyName => used everywhere except loops
console.log(x.name)

// 2- ObjectName['propertyName'] => mostly used inside loops 
console.log(x['age'])


// accessing the method of an obejct:

// ObjectName.methodName()
console.log(x.getName())


// passing parameter to the method of an object:

console.log(x.add(10,20));
console.log(x.add(4,20));
console.log(x.sum());
x.n1 = 20;
console.log(x.sum());

// change the property and method value:

x.name = 'New value';
console.log(x)

x.getName = function(){
    console.log('new function')
}
console.log(x.getName())


// adding new property or method to object:

// objectName.newProperty = 'property value'
x.height = '170'
console.log(x)

x.setColor = function(){
    x.color = 'fair';
}

x.setColor();
console.log(x);


// remove any property or method from object:

delete x.setColor
delete x.color
console.log(x)


// Object's can't be compared:

// comparing two js objects always return false.

var obj1 = {
    title:'first'
}

var obj2 = { // 1001
    title:'first'
}

// reference is comparing here not value.
console.log(obj1 == obj2)


var c = 10;
var v = c;
v = 20;
console.log(v, c)
console.log(v, v==c);

// avoid copying the object in other object/variable

var obj3 = obj2; // reference is copying instead of value
console.log(obj3, obj3 == obj2);

obj3.date = new Date().toLocaleTimeString();
console.log(obj3, obj2)