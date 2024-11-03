/// we didnt study [] so I cheated to understand and I understood it // this is for me

function createUsername(firstName, lastName) {
    // Get the first three letters of the first name
    let firstPart = firstName[0] + firstName[1] + firstName[2];
    
    // Get the first three letters of the last name
    let lastPart = lastName[0] + lastName[1] + lastName[2];
    
    // Calculate the total length of both names
    let totalLength = firstName.length + lastName.length;
    
    // Create the username
    let username = firstPart + lastPart + totalLength;
    
    return username; // Return the username
}

// Example usage
console.log(createUsername("Samantha", "Green")); // Should return 'SamGre13'
