//Permutações: Implemente uma função recursiva que gere todas as permutações de uma string.

function generatePermutations(str) {
    // Base case: if the string has only one character, return it as a single permutation
    if (str.length === 1) {
        return [str];
    }

    // Array to store all permutations
    let permutations = [];

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Extract the current character
        const char = str[i];

        // Generate all permutations of the remaining characters
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const subPermutations = generatePermutations(remainingChars);

        // Append the current character to each sub-permutation
        for (let j = 0; j < subPermutations.length; j++) {
            permutations.push(char + subPermutations[j]);
        }
    }

    // Return all permutations
    return permutations;
}

// Test the function
const inputString = "abc";
const result = generatePermutations(inputString);
console.log(result);