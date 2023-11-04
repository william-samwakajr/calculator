//declearing all the button variables

let numInput1 = document.querySelector('.btn1');
let numInput2 = document.querySelector('.btn2');
let numInput3 = document.querySelector('.btn3');
let numInput4 = document.querySelector('.btn4');
let numInput5 = document.querySelector('.btn5');
let numInput6 = document.querySelector('.btn6');
let numInput7 = document.querySelector('.btn7');
let numInput8 = document.querySelector('.btn8');
let numInput9 = document.querySelector('.btn9');
let numInput0 = document.querySelector('.btn0');


let clear = document.querySelector('#clear');
let del = document.querySelector('#del');
let add = document.querySelector('.btna');
let sub = document.querySelector('.btns');
let div = document.querySelector('.btn÷');
let mul = document.querySelector('.btnm');
let eq = document.querySelector('.btne');
const display = document.querySelector('.scrn');
// input field variable
let inputField2;
//adding  functionality to the buttons


display.innerText = 0

function numberInput() {

}
numInput1.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "1"
    } else {
        display.innerText += "1"
    }
})




/*
clear.addEventListener('click', function() {
    document.querySelector('.scrn').reset();

});
del.addEventListener('click', function() {

});
add.addEventListener('click', function() {
    inputField2 += '+';
    solution.innerHTML = inputField2;
});
sub.addEventListener('click', function() {
    inputField2 += '-';
    solution.innerHTML = inputField2;
});
div.addEventListener('click', function() {
    inputField2 += '/';
    solution.innerHTML = inputField2;
});
mul.addEventListener('click', function() {
    inputField2 += '*';
    solution.innerHTML = inputField2;
});
eq.addEventListener('click', function() {
    inputField2 = eval(inputField2);
    solution.innerText = inputField2;
});
numInput1.addEventListener('click', function() {
    inputField2 += '1';
    solution.innerHTML = parseInt(inputField2);
});
numInput2.addEventListener('click', function() {
    inputField2 += '2';
    solution.innerHTML = parseInt(inputField2);
});
numInput3.addEventListener('click', function() {
    inputField2 += '3';
    solution.innerHTML = parseInt(inputField2);
});
numInput4.addEventListener('click', function() {
    inputField2 += '4';
    solution.innerHTML = parseInt(inputField2);
});
numInput5.addEventListener('click', function() {
    inputField2 += '5';
    solution.innerHTML = parseInt(inputField2);
});
numInput6.addEventListener('click', function() {
    inputField2 += '6';
    solution.innerHTML = parseInt(inputField2);
});
numInput7.addEventListener('click', function() {
    inputField2 += '7';
    solution.innerHTML = parseInt(inputField2);
});
numInput8.addEventListener('click', function() {
    inputField2 += '8';
    solution.innerHTML = parseInt(inputField2);
});
numInput9.addEventListener('click', function() {
    inputField2 += '9';
    solution.innerHTML = parseInt(inputField2);
});
numInput0.addEventListener('click', function() {
    inputField2 += '0';
    solution.innerHTML = parseInt(inputField2);
});

*/