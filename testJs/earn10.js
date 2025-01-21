function findMissingLetters(input) {
    const allLetters = 'abcdefghijklmnopqrstuvwxyz';
    const inputLower = input.toLowerCase();

    return [...allLetters].filter(char => !inputLower.includes(char));
}


const inputString = "Owenzx";
const missing = findMissingLetters(inputString);
console.log("Missing letters:", missing.join(", ")); 