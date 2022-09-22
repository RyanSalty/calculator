
const out = document.querySelector('.text-window');
let numA = '';
let numB = '';
let op = '';
let opFinished = false;

function operate (operator, num1, num2){
    console.log(numA);
    console.log(numB);
    console.log(op);
    switch (operator){
        case "plus":
            out.innerHTML = add(num1, num2);
            break;
        case "minus":
            out.innerHTML = subtract(num1, num2);
            break;
        case "times":
            out.innerHTML = multiply(num1, num2);
            break;
        case "divide":
            if (numB === '0'){
                out.innerHTML = "Cannot divide by 0";
            }
            else{
                out.innerHTML = divide(num1, num2);
            }
            break;
    }
    numA = out.innerHTML;
    numB = '';
    op = '';
    opFinished = true;

}

function add (num1, num2){
    const sum = +num1 + +num2;
    opFinished = true;
    return +sum.toFixed(5);
}

function subtract (num1, num2){
    const diff = +num1 - +num2;
    opFinished = true;
    return +diff.toFixed(5);
}

function multiply (num1, num2){
    const product = +num1 * +num2;
    opFinished = true;
    return +product.toFixed(5);
}

function divide (num1, num2){
    const quot = +num1 / +num2;
    opFinished = true;
    return +quot.toFixed(5);
}

function numPress(num){
    if (out.innerHTML === "0" || num === "0" || opFinished === true){
        opFinished = false;
        out.innerHTML = num;
    } else {
    out.innerHTML = out.innerHTML + num;
    }
}

function decPress(){
    if (out.innerHTML.includes(".")){
        return;
    }
    out.innerHTML = out.innerHTML + ".";
}
/*
take first number in text box
store it
store operator


operate
*/
function opPress(operator){
    numA = out.innerHTML;
    opFinished = true;
    op = operator;
}

function clearOut(){
    out.innerHTML = "0";
    numA = '';
    numB = '';
}

function equals(){
    if (numA !== '' && op !== ''){
        numB = out.innerHTML;
        operate(op, numA, numB);
    }
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    switch (name){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            numPress(name);
            break;
        case '-':
            opPress('minus');
            break;
        case '+':
            opPress('plus');
            break;
        case '/':
            opPress('divide');
            break;
        case '*':
            opPress('times');
            break;
        case '=':
        case 'Enter':
            equals();
    }
  }, false);
