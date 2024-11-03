/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(x){
    if ((x === 'a') || (x === 'e') || (x === 'i') || (x === 'o') || (x === 'u')){
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
