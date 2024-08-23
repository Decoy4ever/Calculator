/**
 *  1. Create Basic Math Operations for Calculator
 */

function add(num1,num2)
{
    return parseInt(num1) + parseInt(num2)
}

function subtract(num1,num2)
{
    return parseInt(num1 - num2)
}

function multiply(num1,num2)
{
    return parseInt(num1 * num2)
}

function divide(num1,num2)
{
    return parseInt(num1/num2)
}

/**
 * 2. Create 3 variables used to update the display
 */
let firstNumber = ""
let secondNumber = ""
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
let sum = ""

function getNumpad()
{
    buttons.forEach((btn) => 
    {
        // handle click number button event
        btn.addEventListener('click',(e) =>
        {
            if(btn.className === 'number')
            {
                getNumberButton(e)
            }
       
            console.log('first number: ' + firstNumber)
            console.log('second number: ' + secondNumber)

            if(btn.className === 'operator')
            {
                if(btn.textContent === '+' || btn.textContent === '-' || btn.textContent === 'x' || btn.textContent === '/')
                {
                   getOperatorButton(e)
                }
            }
            console.log('operator: ' + operator)

            if(btn.className === 'equal')
            {
                if(sum === "")
                {
                    // display the '=' sign
                    display.textContent = e.target.textContent
                    
                    display.textContent = firstNumber + operator + secondNumber
                    // display the result of the operator
                    sum = operate(firstNumber,secondNumber,operator)
                    console.log('Sum: ' + sum)
    
                    display.textContent = sum
                    firstNumber = sum 
                    sum = ""
                    secondNumber = ""
                    operator = ""
                }
            }
        })

        btn.addEventListener('click',(e) =>
        {
            if(btn.className === 'clear')
            {
                display.textContent = e.target.textContent
                display.textContent = "0"
                firstNumber = ""
                secondNumber = ""
                operator = ""
                sum = ""
            }
        })
    })
}

function getNumberButton(number)
{
    if(operator === "" && secondNumber === "" && sum === "")
    {
        // display the targeted click event
        display.textContent = number.target.textContent

        // update the display to show the current click event to handle multiple clicked events
        firstNumber = firstNumber + display.textContent

        // update the display
        display.textContent = firstNumber
    }
    else if(operator !== "" && firstNumber !== "" && sum === "")
    {
        display.textContent = number.target.textContent
        secondNumber = secondNumber + display.textContent

        // update the display to include firstNumber and secondNumber
        display.textContent = firstNumber + operator + secondNumber
    }
    else if(firstNumber !== "" && secondNumber === "" && sum === "")
    {
        firstNumber = sum
        secondNumber = ""
        firstNumber = firstNumber + display.textContent
        console.log('operation is now ' + firstNumber)
    }
}

function getOperatorButton(op)
{
    display.textContent = op.target.textContent
    operator = display.textContent
    display.textContent = firstNumber + operator
}

const number = getNumpad()
number







 


    




























