let currentResult = 0;
let logEntries = [];

function getUserNumber1Input() {
    return parseInt(userInput.value);
}

function getUserNumber2Input() {
    return parseInt(userInput2.value);
}

function createAndWriteOutput(operator, resultCalc) {
    const calcDesc = `${resultCalc} ${operator}`;
    outputResult(currentResult, calcDesc);
}

function writeToLog(
    operationIdentifier,
    operationNum1,
    operationNum2,
    newResult
) {
    const logEntry = {
        operator: operationIdentifier,
        number1: operationNum1,
        number2: operationNum2,
        result: newResult

    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNum1 = getUserNumber1Input();
    const enteredNum2 = getUserNumber2Input();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNum1 ||
        !enteredNum2
    ) {
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult = enteredNum1 + enteredNum2;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult = enteredNum1 - enteredNum2;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult = enteredNum1 * enteredNum2;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult = enteredNum1 / enteredNum2;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, currentResult);
    writeToLog(calculationType, initialResult, enteredNum1, enteredNum2, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtraction() {
    calculateResult('SUBTRACT');
}


function multiply() {
    calculateResult('MULTIPLY');
}

function division() {
    calculateResult('DIVIDE');

}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);