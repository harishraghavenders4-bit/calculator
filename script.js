const display = document.getElementById("display");


function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero");
        return "";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function calculate() {
    let expression = display.value;

    try {
        // Replace symbols for calculation
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

        // Split numbers and operators
        let numbers = expression.split(/[\+\-\*\/\%]/).map(Number);
        let operators = expression.split(/[0-9.]+/).filter(op => op);

        let result = numbers[0];

        // Loop through operators
        for (let i = 0; i < operators.length; i++) {
            let op = operators[i];
            let nextNum = numbers[i + 1];

            if (op === '+') result = add(result, nextNum);
            else if (op === '-') result = subtract(result, nextNum);
            else if (op === '*') result = multiply(result, nextNum);
            else if (op === '/') result = divide(result, nextNum);
            else if (op === '%') result = modulus(result, nextNum);
        }

        display.value = result;

    } catch (error) {
        alert("Invalid Expression");
    }
}



document.addEventListener("keydown", function (e) {

    const allowedKeys = "0123456789+-*/.%";


    if (allowedKeys.includes(e.key)) {
        append(e.key);
    }


    else if (e.key === "Enter") {
        calculate();
    }


    else if (e.key === "Backspace") {
        deleteLast();
    }


    else {
        alert("Invalid key pressed!");
        e.preventDefault();
    }
});