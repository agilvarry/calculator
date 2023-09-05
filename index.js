/**
*State object and functions
*/
const screen = document.querySelector('#screen')
const state = {
    memory: '0',
    screen: '0',
    changeScreen: false,
    operator: null,
    decimal: false
}
const MAX_LENGTH = 15

function setMemory(memory = '0') {
    state.memory = String(memory).slice(0, MAX_LENGTH);
}

function setChangeScreen(change = false) {
    state.changeScreen = change;
}

function setScreen(newScreen = '0') {
    state.screen = String(newScreen).slice(0, MAX_LENGTH);
    screen.textContent = state.screen;
}

function setOperator(operator = null) {
    state.operator = operator;
}
function setDecimal(decimal = null) {
    state.decimal = decimal;
}

/**
* Operator Functions
*/

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
    return a / b;
}

function mod(a, b) {
    return a % b;
}

/**
 * Special Functions
 */

function toggleSign(a) {
    return a * -1;
}

function operate(a, b, operator) {
    return operator(a, b);
}

/**
 * Event Listener functions
 */

function operatorClick(event) {

    const operators = {
        'multiply': multiply,
        'add': add,
        'subtract': subtract,
        'mod': mod,
        'divide': divide
    }

    if (state.operator !== null) {
        operateClick()
    }
    const newOperator = operators[event.target.id]
    setMemory(state.screen);
    setOperator(newOperator);
    setChangeScreen(true);
}

function clearClick() {
    resetState()
}

function resetState(screen = '0', changeScreen = false) {
    setMemory()
    setScreen(screen)
    setOperator()
    setDecimal()
    setChangeScreen(changeScreen)
}

function numberClick(event) {
    const key = event.target.id;
    const screenState = state.changeScreen ? '0' : state.screen;
    const newScreen = screenState === '0' ? key : screenState + key;
    setScreen(newScreen)
    setChangeScreen()
}

function decimalClick() {
    if (!state.decimal) {
        const newScreen = state.screen + '.';
        setScreen(newScreen)
        setDecimal(true)
    }
}

function operateClick() {
    if (state.operator) {
        const newScreen = operate(Number(state.memory), Number(state.screen), state.operator)
        resetState(newScreen, true);
    }

}

function plusMinusClick() {
    const newScreen = toggleSign(state.screen)
    setScreen(newScreen)
}

/**
* Add Event Listeners
*/
document.querySelector("#plusMinus").addEventListener('click', plusMinusClick)
document.querySelector("#operate").addEventListener('click', operateClick)

document.querySelector("#clear").addEventListener('click', clearClick)

document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener('click', operatorClick)
})

document.querySelectorAll(".number").forEach(operator => {
    operator.addEventListener('click', numberClick)
})

document.querySelector("#decimal").addEventListener('click', decimalClick)
