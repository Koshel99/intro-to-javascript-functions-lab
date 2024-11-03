/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
// function maxOfTwoNumbers(numA, numB){
//     let larger
//     if(numA > numbB){
//         larger = numA
//     } else if (numB > numA){
//         larger = numB
//     } else {
//         numA
//     }
// }

// console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

function maxOfTwoNumbers(numA, numB){
    let larger
    if(numA > numbB){
        return numA
    } else if (numB > numA){
        return numB
    } else {
        return numA
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));