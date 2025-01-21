function MissingNumber(numbers) {
    const range = Array.from({ length: Math.max(...numbers) }, (_, i) => i + 1);
    const missingNumbers = range.filter(num => !numbers.includes(num));

    console.log(missingNumbers.length + ":", missingNumbers);
}

MissingNumber([1, 3, 5, 7]); // (2) [2, 4]
MissingNumber([2, 4, 6, 8, 10]); // (1) [9]

function sumSubarrays(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            sum += array.slice(i, j + 1).reduce((acc, val) => acc + val, 0);
        }
    }
    return sum;
}

const array = [1, 2, 3, 4];
console.log("Sum of subarrays:", sumSubarrays(array)); // 50

function findWeekDayOfDate(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date(date);
    const day = d.getDay();
    return daysOfWeek[day];
}

const date = "2023-07-01";
console.log(findWeekDayOfDate(date)); // Saturday
