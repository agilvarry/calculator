/**
*State object and functions
*/
const screen = document.querySelector('#screen')
const state = {
    memory: '0',
    screen: '0',
    operator: null
}

function setMemory(memory = 0) {
    state.memory = memory;
}

function setScreen(newScreen = 0) {
    state.screen = newScreen;
    screen.textContent = newScreen;
}

function setOperator(operator = null) {
    state.operator = operator;
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

function updateScreen(newState) {

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

    console.log(event.target.id)
    // alert("operator!")
    // const res = operate(state.a, state.b, operator.id);
    // setState
}

function clearClick(_event) {
    setMemory()
    setScreen()
    setOperator()
}

function numberClick(event) {
    const key = event.target.id;
    const screenState = state.screen;
    /**
     * if decimal is pressed, append to screen state
     * else if screen is 0 set screen to just key
     * else add key to end of screenState
     */
    const newScreen = key === 'decimal' ? screenState + '.' :
        String(screenState) === "0" ? key : screenState + key;
    console.log(screenState, newScreen)
    console.log(typeof screen, typeof newScreen)

    setScreen(newScreen)
}
/*
* Add Event Listeners
**/
document.querySelector("#clear").addEventListener('click', clearClick)

document.querySelectorAll(".operator").forEach(operator => {
    operator.addEventListener('click', operatorClick)
})

document.querySelectorAll(".number").forEach(operator => {
    operator.addEventListener('click', numberClick)
})

