function findMissingNumbersInRange(start, end, numbers) {
    // ฟังก์ชันสำหรับหาตัวเลขที่หายไปในช่วง start ถึง end
    // สร้างช่วงตัวเลขทั้งหมดจาก start ถึง end
    const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    // กรองตัวเลขที่ไม่มีอยู่ใน array numbers
    const missingNumbers = range.filter(num => !numbers.includes(num));

    return missingNumbers; // คืนค่าตัวเลขที่หายไป
}

const start = 1; // กำหนดจุดเริ่มต้นของช่วง
const end = 20; // กำหนดจุดสิ้นสุดของช่วง
const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // ตัวเลขที่มีอยู่ในช่วง
console.log("Missing numbers:", findMissingNumbersInRange(start, end, numbers)); 
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function findLargestProduct(numbers) {
    // ฟังก์ชันสำหรับหาผลคูณที่มีค่ามากที่สุดจากตัวเลข 2 ตัวใน array
    let maxProduct = -Infinity; // เริ่มต้นผลคูณที่ค่าต่ำสุด
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // คำนวณผลคูณของตัวเลข 2 ตัว และอัปเดตผลคูณที่มากที่สุด
            maxProduct = Math.max(maxProduct, numbers[i] * numbers[j]);
        }
    }
    return maxProduct; // คืนค่าผลคูณที่มากที่สุด
}

const numbersa = [3, 1, 4, 6, 9, 2]; // ตัวเลขใน array
console.log("Largest product:", findLargestProduct(numbersa)); // 54
