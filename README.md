This Calculator Project is based on the Odin project and ask a user to create a Calculator using all the skills learnt
in css and js from the Odin Project curriculum. The description of the project is found in this 
link: https://www.theodinproject.com/lessons/foundations-calculator.

Initial Plan

1. Calculator contains functions for all basic maths operators which are the following
   * add
   * subtract
   * multiply
   * divide

Idea: create a function for the following operators takes two parameters i.e. 
function add(num1, num2){}

2. Function called "operate" that take two numbers and call one of the above functions
Idea: function operate(num1,num2) and use a control logic: either if statement or case statement to 
call the functions. 

3. Create a basic HTML calculator with the following buttons
* The digits "1","2","3","4","5","6","7","8","9"
* The equal "="
* The '+'.'-','/' and '*' operator
* A clearAll operator "A/C" that resets ti 0
* A 'Delete' button to remove single numbers or oeprators
* A display to showcase the operations. Initially have to show dummy numbers i.e. "0";

Idea: Create a gird using flexbox and inside the flex-container will be flex-items that is buttons. The basic apperance

    -------
    ______0
    -------
    1 2 3 /
    4 5 6 x
    7 8 9 -
    0     =  

