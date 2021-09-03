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
    return a/b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            add(a,b);
            break;
        case '-':
            subtract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '/':
            divide(a,b);
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
let expressionOutput = document.querySelector('#input-line');

// Adding event listener to number buttons
// Function for what to do when number button clicked

document.querySelectorAll('.button, .number').forEach(item => {
    item.addEventListener('click', numberClicked);
});

function numberClicked(e) {
    activeNumber += this.textContent;
    expressionOutput.textContent = activeNumber;
    console.log(activeNumber);
}

// Adding event listener to operator buttons
// Function for what to do when operator button clicked



// Adding event listener to equals button
// Function for what to do when equals button clicked

// Adding event listener to clear button
// Function for what to do when clear button clicked