/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(a,b){
    if (b === "C"){
        return (a * (9/5)) + 32;
    } else if (b === "F"){
        return (a - 32) * (5/9);
    } else {
        return "Error"
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
