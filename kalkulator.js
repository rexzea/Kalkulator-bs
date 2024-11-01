function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function backspace() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}

function calculatePercentage() {
    const resultField = document.getElementById('result');
    resultField.value = eval(resultField.value) / 100;
}

function calculateSquareRoot() {
    const resultField = document.getElementById('result');
    const value = eval(resultField.value);
    resultField.value = Math.sqrt(value);
}

function calculateSquare() {
    const resultField = document.getElementById('result');
    const value = eval(resultField.value);
    resultField.value = value * value;
}

function calculateLog() {
    const resultField = document.getElementById('result');
    const value = eval(resultField.value);
    resultField.value = Math.log10(value);
}

function calculateFactorial() {
    const resultField = document.getElementById('result');
    const value = parseInt(eval(resultField.value), 10);
    let factorial = 1;
    for (let i = 1; i <= value; i++) {
        factorial *= i;
    }
    resultField.value = factorial;
}

function calculateSin() {
    const resultField = document.getElementById('result');
    const value = eval(resultField.value);
    resultField.value = Math.sin(value * Math.PI / 180).toFixed(4);
}

function calculateCos() {
    const resultField = document.getElementById('result');
    const value = eval(resultField.value);
    resultField.value = Math.cos(value * Math.PI / 180).toFixed(4);
}

function calculateTan() {
    const resultField = document.getElementById('result');
    const value = eval(resultField.value);
    resultField.value = Math.tan(value * Math.PI / 180).toFixed(4);
}
