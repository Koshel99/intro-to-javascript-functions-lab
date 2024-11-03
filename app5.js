/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(user ,time){
    return 'Good' + " " + time + ',' + " " + user + '!'
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
