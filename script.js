let display = document.getElementById('display');
let operator = '';
let number1 = '';
let number2 = '';

function appendNumber(number) {
    if (operator === '') {
        number1 += number;
        display.value = number1;
    } else {
        number2 += number;
        display.value = number2;
    }
}

function operate(op) {
    if (number1 === '') return;
    operator = op;
    display.value = '';
}

function calculate() {
    if (number1 === '' || number2 === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            break;
        case '/':
            result = parseFloat(number1) / parseFloat(number2);
            break;
    }
    display.value = result;
    number1 = result;
    number2 = '';
    operator = '';
}

function clearDisplay() {
    number1 = '';
    number2 = '';
    operator = '';
    display.value = '';
}
