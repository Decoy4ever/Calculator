const additionButton = document.querySelector('.add')
const subtractButton = document.querySelector('.sub')
const multiplicationButton = document.querySelector('.mult')
const divideButton = document.querySelector('.divide')
const equalButton = document.querySelector('.equal')
const displayDiv = document.querySelector('.display')

// Store the numbers and operators in an empty array
let firstNum = []
let secondNum = []
let operator = []

function add(num1,num2)
{
    console.log(num1 + num2)
}

function subtract(num1,num2)
{
    console.log(num1 - num2)
}
function multiply(num1,num2)
{
    console.log(num1 * num2)
}

function divide(num1,num2)
{
    console.log(num1 / num2)
}

const btn = document.querySelector('.container-item')

function displayOperations()
{
    btn.addEventListener('click',(e) =>
    {
        console.log(e.target.textContent)
        // change the text content of the display
        displayDiv.textContent = e.target.textContent
    }) 
}

displayOperations()



















