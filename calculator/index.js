var readline = require('readline-sync');
var userName = readline.question("May I have your name?\n");
console.log("Hi " + userName + "!");
var operations = ['+', '-', '*', '/'];
var operator = null;
var firstNumber = 0;
var secondNumber = 0;
function operationQuestion() {
    operator = readline.question("What operation would you like to perform?\n "
        + "\nOptions:"
        + "\nSum (" + operations[0] + ")"
        + "\nSubtraction (" + operations[1] + ")"
        + "\nMultiplication (" + operations[2] + ")"
        + "\nDivision (" + operations[3] + ")\n"
        + "Press the desired operator and press Enter!\n"

        
    );
        if (!operations.includes(operator)) {
            console.log("That is not a valid operation\n");
            operationQuestion();
        };
        

firstNumber = readline.questionInt("Type the first number:");
secondNumber = readline.questionInt("Type the second number:");
switch (operator) {
    case "+":
        console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber + secondNumber));
        break;
    case "-":
        console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber - secondNumber));
        break;
    case "*":
        console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber * secondNumber));
        break;
    case "/":
        console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + ((firstNumber / secondNumber).toFixed(2)));
        break;
    default:
        console.log(userName + "; " + "Something went wrong :(");
}
}

/*function call*/
operationQuestion();


