/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/


function basicCalculator(num1,num2,operator){
    if (operator === "add"){
        return num1 + num2;
    } else if (operator === "subtract"){
        return num1 - num2;
    } else if (operator === "multiply"){
        return num1 * num2;
    } else if (operator === "divide"){
        return num1 / num2;
    } else {
        return "Error"
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
