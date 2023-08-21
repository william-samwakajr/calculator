//declaring all the button variables
let numInput = document.querySelectorAll('.btn');
let displayValue = document.querySelector('.scrn');

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
    if (SecondInput == 0) {

    }
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
};