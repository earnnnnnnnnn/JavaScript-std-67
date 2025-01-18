// ฟังก์ชัน sumTwoSmallestNums: ใช้หาผลรวมของตัวเลขที่น้อยที่สุด 2 ตัวจากอาร์เรย์ที่มีค่าเป็นบวก
function sumTwoSmallestNums(arr) {
    // หาเลขที่น้อยที่สุดจากอาร์เรย์ที่มีค่าเป็นบวก
    const num1 = Math.min(...arr.filter(f => f > 0));  // filter จะกรองเฉพาะค่าที่เป็นบวก จากนั้นใช้ Math.min หาค่าที่น้อยที่สุด
    arr.splice(arr.indexOf(num1), 1);  // เอาค่าที่เจอออกจากอาร์เรย์
    // หาเลขที่น้อยที่สุดตัวถัดไป
    const num2 = Math.min(...arr.filter(f => f > 0));  // ทำซ้ำกับอาร์เรย์ที่เหลือ

    // คืนค่าผลรวมของเลขที่น้อยที่สุด 2 ตัว
    return num1 + num2;
}

// ตัวอย่างการใช้ฟังก์ชัน
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));  // ผลลัพธ์: 7 (5 + 2)
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));  // ผลลัพธ์: 10 (10 + 0)
console.log(sumTwoSmallestNums([2, 9, 6, -1]));  // ผลลัพธ์: 8 (2 + 6)
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));  // ผลลัพธ์: 563 (221 + 342)
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));  // ผลลัพธ์: 4519 (1617 + 2902)
