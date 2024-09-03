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
            }
            else if(btn.className === 'equal')
            {
                getEqualButton(e)
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


function getNumberButton(number)
{
    // display the initial targeted click event
    display.textContent = number.target.textContent 

    if(secondNumber === "" && operator === "")
    {
        firstNumber = firstNumber + display.textContent

        // if user selects '.' print NaN to overcome this do the following operation 
        if(isNaN(firstNumber))
        {
            firstNumber = "0" + firstNumber
        }

        display.textContent = parseFloat(firstNumber) 
    }
    else if(firstNumber !== "" && operator !== "")
    {
        secondNumber = secondNumber + display.textContent

        if(isNaN(secondNumber))
        {
            secondNumber = "0" + secondNumber
        }
        display.textContent = parseFloat(firstNumber) + operator + parseFloat(secondNumber)
    }
    
    // Handle the disabling of buttons
    if(firstNumber.includes('.') && operator === "")
    {
        decimalButton.disabled = true
    }
    else if(secondNumber.includes('.') && operator !== "" )
    {
        decimalButton.disabled = true
    }
    console.log(`firstNumber: ${firstNumber}`)
    console.log(`secondNumber: ${secondNumber}`)

}


function getClearAllButton(clearAll)
{
    clearAll.target.textContent
    console.log('I clicked clear all')
    firstNumber = "0"
    secondNumber = ""
    operator = ""
    console.log('firstNumber: ' + firstNumber + ' secondNumber: ' + secondNumber)
    display.textContent = firstNumber
    decimalButton.disabled = false
}

function getOperatorButton(op)
{
    display.textContent = op.target.textContent
    if(firstNumber !== "" && secondNumber === "")
    {
        operator = display.textContent
        display.textContent = parseFloat(firstNumber) + operator 
        console.log('operator: ' + operator)
        decimalButton.disabled = false
        console.log('decimal button is enabled again after clicking operator')
    }
    // handles case where firstNumber = secondNumber = 0
    else if(firstNumber === "" && secondNumber === "")
    {
        firstNumber = "0"
        secondNumber = "0"
        operator = display.textContent
        display.textContent = parseFloat(firstNumber) + operator 
        decimalButton.disabled = false
    }
}

function getEqualButton(equalSign)
{
    display.textContent = equalSign.target.textContent
    if(firstNumber !== "" && secondNumber !== "" && operator !== "")
    {
        display.textContent = parseFloat(firstNumber) + operator + parseFloat(secondNumber)
        sum = operate(firstNumber,secondNumber,operator)
        console.log('Sum: ' + sum)
        display.textContent = parseFloat(sum)
        decimalButton.disabled = false

        // store the sum as the firstNumber and display
        firstNumber = sum 
        secondNumber = ""
        operator = ""
    }
    else if(firstNumber !== "" && secondNumber === "" && operator === "")
    {
        return display.textContent = firstNumber
    }
}


function getDeleteNumberButton(del)
{
    del.target.className
    if(firstNumber !== "" && operator === "" && secondNumber === "")
    {
        let len1 = firstNumber.length
        console.log(firstNumber.length)
        firstNumber = firstNumber.slice(0,len1 - 1)
        console.log('firstNumber becomes: ' + firstNumber)
        display.textContent = parseFloat(firstNumber)

        if(firstNumber === "")
        {
            return display.textContent = "0"
        }
    }
    else if(firstNumber !== "" && operator !== "" && secondNumber !== "")
    {
        let len2 = secondNumber.length
        secondNumber =  secondNumber.slice(0,len2 - 1)
        console.log('secondNumber becomes: ' + secondNumber)
        display.textContent = firstNumber + operator + secondNumber
    }
    else if(firstNumber !== "" && operator !== "" && secondNumber === "")
    {
        operator = operator.slice(0,-1)
        console.log('deleted operator')
        display.textContent = parseFloat(firstNumber) + operator
    }
}

const number = getNumpad()
number








 


    



























