function numberSplit(num) {
    num /= 2;
    let result = (`[ ${Math.floor(num)} , ${Math.ceil(num)} ]`);
    return result;
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
