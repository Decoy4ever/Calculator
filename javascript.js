const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const decimalButton = document.querySelector('#decimal')
let sum = ""
let firstNumber = ""
let secondNumber = ""
let operator = ""

function add(num1,num2)
{
    return parseFloat(num1) + parseFloat(num2)
}

function subtract(num1,num2)
{
    return parseFloat(num1) - parseFloat(num2)
}

function multiply(num1,num2)
{
    return parseFloat(num1) *  parseFloat(num2)
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

function getNumpad()
{
    // loop through each button
    buttons.forEach((btn) => 
    {
        btn.addEventListener('click',(e) =>
        {
            switch(btn.className)
            {
                case 'number':
                    display.textContent = e.target.textContent 
                    getNumberButton(e)
                    break
                case 'operator':
                    display.textContent = e.target.textContent
                    getOperatorButton(e)
                    break
                case 'equal':
                    getEqualButton(e)
                    break
                case 'delete':
                    getDeleteButton(e)
                    break
                case 'clear':
                    getClearAllButton(e)
                    break
            }
        })
    })
}

function getNumberButton()
{
    if(secondNumber === "" && operator === "")
    {
        firstNumber = (firstNumber + display.textContent).substring(0,12)

        // if user selects '.' and prints NaN set the firstNumber as the following 
        if(isNaN(firstNumber))
        {
            firstNumber = "0" + firstNumber
        }
        display.textContent = parseFloat(firstNumber)
        console.log('firstNumber : ' + firstNumber)
    }
    else if(firstNumber !== "" && operator !== "")
    {
        secondNumber = (secondNumber + display.textContent).substring(0,12)

        if(isNaN(secondNumber))
        {
            secondNumber = "0" + secondNumber
        }
        display.textContent = parseFloat(firstNumber) + operator + '\r' + parseFloat(secondNumber)
        console.log('secondNumber : ' + secondNumber)
    }

    // Handle the disabling of buttons
    if(firstNumber.toString().includes('.') && secondNumber.toString().includes('.') && operator === "")
    {
        decimalButton.disabled = true
    }
    else
    {
        decimalButton.disabled = false
    }
}

function getClearAllButton()
{
    firstNumber = "0"
    secondNumber = ""
    operator = ""
    display.textContent = firstNumber
    decimalButton.disabled = false
}

function getOperatorButton()
{
    if(firstNumber !== "" && secondNumber === "")
    {
        operator = display.textContent
        display.textContent = parseFloat(firstNumber) + operator 
        decimalButton.disabled = false
        console.log('operator: ' + operator)
    }
    // handles case when user press operator button after sum been calculated
    else if(firstNumber === "" && secondNumber === "")
    {
        firstNumber = sum
        operator = display.textContent
        display.textContent = firstNumber + operator 
        console.log('operator clicked after sum: ' + operator)
        decimalButton.disabled = false
    }
}

function getEqualButton()
{
    if(firstNumber !== "" && secondNumber !== "" && operator !== "")
    {
        display.textContent = parseFloat(firstNumber) + operator + parseFloat(secondNumber)
        sum = operate(firstNumber,secondNumber,operator)
        console.log('sum: ' + sum)
        display.textContent = parseFloat(sum)
        decimalButton.disabled = false
        firstNumber = ""
        secondNumber = ""
        operator = ""
    }
    // handle case user presses '=' after firstNumber
    else if(firstNumber !== "" && secondNumber === "" && operator === "")
    {
        return display.textContent = firstNumber
    }
}

function getDeleteButton()
{
    if(firstNumber !== "" && operator === "" && secondNumber === "")
    {
        let len1 = firstNumber.length
        firstNumber = firstNumber.toString().slice(0,len1 - 1)
        display.textContent = parseFloat(firstNumber)
        decimalButton.disabled = false

        if(firstNumber === "")
        {
            return display.textContent = '0'
        }
    }
    else if(firstNumber !== "" && operator !== "" && secondNumber !== "")
    {
        let len2 = secondNumber.length
        secondNumber =  secondNumber.toString().slice(0,len2 - 1)
        display.textContent = firstNumber + operator + secondNumber
        decimalButton.disabled = false
    }
    else if(firstNumber !== "" && operator !== "" && secondNumber === "")
    {
        operator = operator.slice(0,-1)
        display.textContent = parseFloat(firstNumber) + operator
        decimalButton.disabled = false
    }
}

/**
 * Handle keyboard events
 */
function getKeyboardEvents()
{
    document.addEventListener('keydown',(e) =>
    {
        switch(e.key)
        {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
                display.textContent = e.key 
                getNumberButton(e)
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                display.textContent = e.key 
                getOperatorButton(e)
                break
            case '=':
            case 'Enter':
                getEqualButton(e)
                break;
            case 'Backspace':
                getDeleteButton(e)
                break;
            case 'Delete':
                getClearAllButton(e)
                break;
        }
    })  
}

const keyboard = getKeyboardEvents()
const number = getNumpad()
keyboard
number








 


    


























