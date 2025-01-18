function sumTwoSmallestNums(array) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of array) {
        if (seen.has(item)) {
            duplicates.add(item); // เก็บค่าที่ซ้ำ
        } else {
            seen.add(item); // เก็บค่าแรกที่เจอ
        }
    }

    return [...duplicates]; // แปลง Set เป็น Array เพื่อให้เป็นผลลัพธ์
}
console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));