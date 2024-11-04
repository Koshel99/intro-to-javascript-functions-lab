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


////Option 2:

function createUsername(firstName, lastName) {
    // Initialize variables for the first parts
    let firstPart = '';
    let lastPart = '';

    // Get the first three letters of the first name
    for (let i = 0; i < 3; i++) {
        if (i < firstName.length) { // Check if the index is within the length of the first name
            firstPart = firstPart + firstName[i]; // Concatenate directly
        }
    }
    
    // Get the first three letters of the last name
    for (let i = 0; i < 3; i++) {
        if (i < lastName.length) { // Check if the index is within the length of the last name
            lastPart = lastPart + lastName[i]; // Concatenate directly
        }
    }
    
    // Calculate the total length of both names
    let totalLength = firstName.length + lastName.length;
    
    // Create the username
    let username = firstPart + lastPart + totalLength;
    
    return username; // Return the username
}

// Example usage
console.log(createUsername("Samantha", "Green")); // Should return 'SamGre13'
