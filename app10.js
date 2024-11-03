/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

function calculateGrade(x){
    if (x>=90){
        return 'A'
    } else if ((x >= 80 ) && (x <= 89)){
        return 'B'
    } else if (( x >= 60) && (x <=69)) {
        return 'C'
    } else {
        return 'F'
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));

