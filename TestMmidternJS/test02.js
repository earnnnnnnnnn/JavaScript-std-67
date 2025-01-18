function highestDigit(number) {
    const digits = String(number).split('').map(Number); 
    const maxDigit = Math.max(...digits); 
    return maxDigit;
}


console.log(highestDigit(379)); 
console.log(highestDigit(2));   
console.log(highestDigit(377401));