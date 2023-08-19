//declaring all the button variables
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
let solution = document.querySelector('.scrn');

// input variables 
let firstInput = '';
let SecondInput = '';
let operator = '';

// operator functions 
let addition = function() {
    let ans = firstInput + SecondInput;
    return ans;
};
let subtract = function() {
    let ans = firstInput - SecondInput;
    return ans;
};
let divide = function() {
    let ans = firstInput / SecondInput;
    return ans;
};
let multiply = function() {
    let ans = firstInput * SecondInput;
    return ans;
};

// function that handles the calculations 
function operate() {
    operator = '+';
    let finalAns = '';
    if (operator == '+') {
        finalAns = addition();
    } else if (operator == '-') {
        finalAns = subtract();
    } else if (operator == '×') {
        finalAns = multiply();
    } else if (operator == '÷') {
        finalAns = divide();
    }
    return finalAns
}
$("btn1").click(function() {
    var fired_button = $("button").val();
    alert(fired_button);
});