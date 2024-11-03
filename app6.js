/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(numA,numB,numC){
    if ((numA > numB) && (numA > numC)){
        return numA
    } else if ((numB > numA) && (numB > numC)){
        return numB
    } else {
        return numC
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
