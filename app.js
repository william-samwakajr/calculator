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
    if (display.innerText.length == 9) {

    }
});
numInput2.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "2"
    } else {
        display.innerText += "2"
    }
    if (display.innerText.length == 9) {

    }
});
numInput3.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "3"
    } else {
        display.innerText += "3"
    }
    if (display.innerText.length == 9) {

    }
});
numInput4.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "4"
    } else {
        display.innerText += "4"
    }
    if (display.innerText.length == 9) {

    }
});
numInput5.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "5"
    } else {
        display.innerText += "5"
    }
    if (display.innerText.length == 9) {

    }
});
numInput6.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "6"
    } else {
        display.innerText += "6"
    }
    if (display.innerText.length == 9) {

    }
});
numInput7.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "7"
    } else {
        display.innerText += "7"
    }
    if (display.innerText.length == 9) {

    }
});
numInput8.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "8"
    } else {
        display.innerText += "8"
    }
    if (display.innerText.length == 9) {

    }
});
numInput9.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "9"
    } else {
        display.innerText += "9"
    }
    if (display.innerText.length == 9) {

    }
})
numInput0.addEventListener("click", () => {
    if (display.innerText == 0) {
        display.innerText = "0"
    } else {
        display.innerText += "0"
    }
    if (display.innerText.length == 9) {

    }
})

clear.addEventListener("click", () => {
        display.innerText = 0;
    })
    /*
    del.addEventListener("click", () => {
        let deletedCharString;
        if (!display.innerText == 0) {
            deletedCharString = display.innerText.replace(slice(display.innerText.length), "")
            display.innerText = deletedCharString;
        }
    })
    */
add.addEventListener("click", () => {
    if (!display.innerText == 0) {
        display.innerText += "+"
    }
})
sub.addEventListener("click", () => {
    if (!display.innerText == 0) {
        display.innerText += "-"
    }
})
div.addEventListener("click", () => {
    if (!display.innerText == 0) {
        display.innerText += "/"
    }
})
mul.addEventListener("click", () => {
    if (!display.innerText == 0) {
        display.innerText += "*"
    }
})

eq.addEventListener("click", () => {
    let result = eval(display.innerText);
    display.innerText = result;
})