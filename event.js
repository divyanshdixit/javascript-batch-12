// any action take by user are called events

// js can react to those events

// click event => listen => function(){} (event handler)

// onload => html page load finished
// onclick => 
// onchange => 
// onmouseover=>
// onmouseout
// onkeyup
// onkeydown
// onkeypress
// ononline
// onoffline

// inline css 
<h1 style> </h1>

// inline js :



// we can right event in 3 ways:

// inline js : js in html element 

{/* <button type="button" onclick="myfunc()"> </button> */}

function myfunc(){
    console.log('button is clicked')
}

{/* <button type="button" id="btn1" onclick="console.log('button is clicked')"> </button> */}


// js with html dom:

// <button id="btn1"> Click </button>

document.getElementById('btn1').onclick = myfunc


document.getElementById('btn1').onclick= function(){
    console.log('button clicked 2nd time!')
};

document.getElementById('btn1').onclick= function(){
    console.log('button clicked 3rd time!')
};

// document.getElementById('btn1').addEventListener('click', function(){
//     console.log('button clicked 2nd time!')
// })

// document.getElementById('btn1').addEventListener('click', function(){
//     console.log('button clicked 3rd time!')
// })

document.getElementById('input1').onblur = function(){
    console.log('you are out of focus!')
}

document.getElementById('input1').onfocus = function(){
    console.log('you are in focus!')
}

document.getElementById('input1').onchange = function(e){
    console.log(e); // event parameter has all the info realted to js event 
    console.log(e.target.value);

    var str = e.target.value;

    // length limitation:
    if(str.length <= 10){
        console.log('everything is alright!');
        location.href = "https://github.com/divyanshdixit"
    }else{
        console.log(`Can't put more than 10 chars`)
    }
}

// using addEventListener(): 