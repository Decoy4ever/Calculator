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
    else if(op === '*')
    {
        return multiply(num1,num2)
    }
}

/**
 * Create function populates the display
 */

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const clearButton = document.querySelector('.clear')
let reset = ""

function getNumpad()
{
    buttons.forEach((btn) => 
    {
        // handle click number button event
        btn.addEventListener('click',(e) =>
        {
            if(btn.className === 'number')
            {
                if(operator === "")
                {
                    // display the current click event
                    display.textContent = e.target.textContent

                    // update the display to show the current click event to handle multiple clicked events
                    firstNumber = firstNumber + display.textContent

                    // update the display
                    display.textContent = firstNumber
                }
                else if(operator !== "")
                {
                       // display the current click event
                       display.textContent = e.target.textContent

                       // update the display to show the current click event to handle multiple clicked events
                       secondNumber = secondNumber + display.textContent
   
                       // update the display
                       display.textContent = secondNumber
                }
            }
       
            console.log('first number: ' + firstNumber)
            console.log('second number: ' + secondNumber)

            if(btn.className === 'operator')
            {
                if(btn.textContent === '+')
                {
                    display.textContent = e.target.textContent

                    operator = display.textContent
                }
                else if(btn.textContent === '-')
                {
                    display.textContent = e.target.textContent

                    operator = display.textContent
                }
                else if(btn.textContent === '*')
                {
                    display.textContent = e.target.textContent

                    operator = display.textContent
                }
                else if(btn.textContent === '/')
                {
                    display.textContent = e.target.textContent

                    operator = display.textContent
                }
            }
            console.log('operator: ' + operator)

            if(btn.className === 'equal')
            {
                // display the '=' sign
                display.textContent = e.target.textContent
                
                // display the result of the operator
                operator = operate(firstNumber,secondNumber,operator)
                console.log(operator)

                display.textContent = operator
            }

            if(btn.className === 'clear')
            {
                display.textContent = ""
                firstNumber = ""
                secondNumber = ""
                op = ""
            }
        })
    })
}

const number = getNumpad()
number







 


    




























