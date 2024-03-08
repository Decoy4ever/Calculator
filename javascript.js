// create a getDigit() that will handle user input for number buttons
// use event listener so when user clicks on the btn it prints the output value
// user clicks on a button that is a number the value will be stored into a new variable number array that will be set empty
// user clicks on a button that is a number the value will then be stored into the variable number array
// use the operate function to call that will listen if the user presses any of the operators
// print out the result

const btns = document.querySelectorAll("button");
// const display = document.querySelector(".display");
const sumArr = [];

const getBtnValue = (num) => {
    // get the button value
    num = num.target.textContent;

    // join the num into the sumArr
    sumArr.push(num);
    // console.log("The sum arr is: " + sumArr);

    const joinArr = sumArr.join("");
    console.log("joined Arr is: " + joinArr);

    return joinArr;
}

const getBtnOutput = () => {
    btns.forEach((button) => {
        button.addEventListener("click", getBtnValue)
    })
}

getBtnOutput();










