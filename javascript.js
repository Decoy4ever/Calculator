/**
 *  1. Create Basic Math Operations for Calculator
 */

function add(num1,num2)
{
    return parseFloat(num1) + parseFloat(num2)
}

function subtract(num1,num2)
{
    return parseFloat(num1) -parseFloat(num2)
}

function multiply(num1,num2)
{
    return parseFloat(num1) *  parseFload(num2)
}

function divide(num1,num2)
{
    if(num1 !== "" && num2 === "0")
    {
        alert('divide by 0 is unavaliable')
        return 0
    }
    else
    {
        return parseFloat(num1)/ parseFloat(num2)
    }
}

/**
 * 2. Create 3 variables used to update the display
 */
let firstNumber = ""
let secondNumber = ""
let decimal = ""
let operator = ""

/** 
 * Create Operation function that take 3 parameters and calls one above function
*/

function operate(num1,num2,op)
{
    if(op === '+')
    {
        return add(num1,num2)
    }
    else if(op === '-')
    {
        return subtract(num1,num2)
    }
    else if(op === '/')
    {
      return divide(num1,num2)
    }
    else if(op === 'x')
    {
        return multiply(num1,num2)
    }
}

/**
 * Create function populates the display
 */

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const decimalButton = document.querySelector('.decimal')
let sum = ""


function getNumpad()
{
    // loop through each button
    buttons.forEach((btn) => 
    {
        // handle click number button event
        btn.addEventListener('click',(e) =>
        {
            if(btn.className === 'number')
            {
                getNumberButton(e)
            }
       
            else if(btn.className === 'operator')
            {
                getOperatorButton(e)
                console.log('operator: ' + operator)
            }
            else if(btn.className === 'equal')
            {
                getEqualButton(e)
            }
            else if(btn.className === 'decimal')
            {
                getDecimalButton(e)
            }
            else if(btn.className === 'delete')
            {
                getDeleteNumberButton(e)
            }
            else if(btn.className === 'clear')
            {
               getClearAllButton(e)
            }
        })
    })
}

function getClearAllButton(clearAll)
{
    display.textContent = clearAll.target.textContent
    display.textContent = "0"
    console.log('I clicked clear all')
    firstNumber = ""
    secondNumber = ""
    operator = ""
    console.log('firstNumber: ' + firstNumber + ' secondNumber: ' + secondNumber)
}


function getDecimalButton(dec)
{
    display.textContent = dec.target.textContent

    if(operator === "")
    {
        firstNumber = firstNumber + display.textContent
        console.log('firstNumber as a floating point: ' + firstNumber)
        display.textContent = firstNumber
    }
    else if(operator !== "")
    {
        secondNumber = secondNumber + display.textContent
        console.log('secondNumber as a floating point: ' + secondNumber)
        display.textContent = firstNumber + operator + secondNumber 
    }
 
    // if firstBumber includes a '.' will disable the '.' button
    if(firstNumber.includes('.') || secondNumber.includes('.'))
    {
        decimalButton.disabled = true
    }
    else 
    {
        decimalButton.disabled = false
    }
}

function getNumberButton(number)
{
    // display the targeted click event
    display.textContent = number.target.textContent 

    if(secondNumber === "" && operator === "")
    {
        // update the display to show the current click event to handle multiple clicked events
        firstNumber = firstNumber + display.textContent
        console.log('first number: ' + firstNumber)

        // update the display
        display.textContent = firstNumber 
    }
    else if(firstNumber !== "" && operator !== "" )
    {
        secondNumber = secondNumber + display.textContent

        // update the display to include firstNumber and secondNumber
        display.textContent = firstNumber + operator + secondNumber
        console.log('second number: ' + secondNumber)
    }
    else if(firstNumber === "" && secondNumber === "" && operator !== "")
    {
        firstNumber = "0"
        decimalButton.disabled = false
        display.textContent = firstNumber  + operator
        secondNumber = number.target.textContent
        display.textContent = firstNumber + operator + secondNumber
    }
    // handles the case if user selects'.'
}

function getOperatorButton(op)
{
    display.textContent = op.target.textContent
    operator = display.textContent
    display.textContent = firstNumber + operator  

    decimalButton.disabled = false
    console.log('decimal button is enabled again after clicking operator')

}

function getEqualButton(equalSign)
{
    display.textContent = equalSign.target.textContent
    if(firstNumber !== "" && secondNumber !== "" && operator !== "")
    {
        display.textContent = firstNumber + operator + secondNumber
        sum = operate(firstNumber,secondNumber,operator)
        console.log('Sum: ' + sum)
    
        display.textContent = sum
        // store the sum as the firstNumber and display
        firstNumber = sum 
        secondNumber = ""
    }
}

/**
 * Handle Decimal
 */

const number = getNumpad()
number








 


    



























