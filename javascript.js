const operatorButton = document.querySelectorAll('.operator')
const numberButton = document.querySelectorAll('.number')
const additionButton = document.querySelector('.add')
const subtractButton = document.querySelector('.sub')
const multiplicationButton = document.querySelector('.mult')
const divideButton = document.querySelector('.divide')
const equalButton = document.querySelector('.equal')
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

// Store the numbers and operators in an empty array
let displayValue = ""
let mathOperationArr = ""


function add(num1,num2)
{
    return num1 + num2
}

function subtract(num1,num2)
{
    return num1 - num2
}
function multiply(num1,num2)
{
    return num1 * num2
}

function divide(num1,num2)
{
    return num1 / num2
}

let numberArr = ""
function getNumberButtons()
{
    function numbers()
    {
        numberButton.forEach((btn) =>
        {
            btn.addEventListener('click',(e) =>
            {
                display.textContent = e.target.textContent
                
                // store the value the click element into a var
                displayValue = display.textContent
                
                // join the clicked element into a another var
                numberArr = numberArr.concat(displayValue)
                console.log(numberArr)
                
                // update the display
                display.textContent = numberArr
            })
        })
    }
    return numbers
}
     
function operate(firstNumber, secondNumber)
{
    firstNumber = getNumberButtons()
    // secondNumber = getNumberButtons()
    return firstNumber
}

const getMathOperation = operate()
getMathOperation()















