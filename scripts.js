function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if(b===0) {
        alert('You cannot divide by 0!!!!');
        return;
    }
    return a/b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        default:
            alert('You chose the wrong button!');
            break;
    }
}

// Initialize the two strings that we will use with the operator
let firstNumber = '';
let secondNumber = '';
let activeNumber = '';
let activeOperator = '';
let expressionOutput = document.querySelector('#input-line');
let operatorActive = false;
// Adding event listener to number buttons
// Function for what to do when number button clicked

document.querySelectorAll('.button.number').forEach(item => {
    item.addEventListener('click', numberClicked);
});

function numberClicked(e) {
    if (e.target.getAttribute('id') === 'decimal') {
        if (activeNumber.includes('.')) {
            return;
        }
    }
    if (operatorActive === true) {
        activeNumber = this.textContent;
        operatorActive = false;
    } else {
        activeNumber += this.textContent;
    }
    expressionOutput.textContent = activeNumber;
    console.log(activeNumber);
}

// Adding event listener to operator buttons
// Function for what to do when operator button clicked

document.querySelectorAll('.button.operator').forEach(item => {
    item.addEventListener('click', operatorClicked);
});

function operatorClicked(e) {
    if (firstNumber != '') {
        equals();
        activeOperator = this.textContent;
    } else {
        activeOperator = this.textContent;
        if (activeNumber === '') {
            activeNumber = 0;
        }
        firstNumber = parseInt(activeNumber);
        operatorActive = true;
    }
}

// Adding event listener to equals button
// Function for what to do when equals button clicked

document.querySelector('#equals').addEventListener('click', equals);

function equals(e) {
    secondNumber = parseInt(activeNumber);
    console.log(firstNumber + activeOperator + secondNumber);
    activeNumber = operate(activeOperator, firstNumber, secondNumber);
    firstNumber = activeNumber;
    secondNumber = '';
    expressionOutput.textContent = activeNumber;
    operatorActive = true;
}

// Adding event listener to clear button
// Function for what to do when clear button clicked
document.querySelector('#clear').addEventListener('click', clear);

function clear(e) {
    firstNumber = '';
    secondNumber = '';
    activeNumber = '';
    activeOperator = '';
    operatorActive = false;
    expressionOutput.textContent = '';
}

// Adding in the delete functionality

document.querySelector('.back').addEventListener('click', ()=> {
    if (activeNumber.length > 0) {
        activeNumber = activeNumber.slice(0,-1);
        expressionOutput.textContent = activeNumber;
    }
});