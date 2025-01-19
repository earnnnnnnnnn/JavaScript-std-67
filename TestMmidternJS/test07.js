// ฟังก์ชัน sumTwoSmallestNums ใช้ในการหาผลรวมของสองค่าต่ำสุดในอาร์เรย์
function sumTwoSmallestNums(arr) {
    // ใช้ filter เพื่อลบค่าที่ไม่เป็นบวก และ sort เพื่อเรียงค่าจากน้อยไปมาก
    const result = arr.filter(number => number > 0).sort((a, b) => a - b);

    // คืนค่าผลรวมของสองค่าต่ำสุด
    return result[0] + result[1];
}

// ทดสอบฟังก์ชัน
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); // แสดงผล: 7 (5 + 2)
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // แสดงผล: 10 (10 + 0, ไม่ได้คำนึงถึงค่าลบ)
console.log(sumTwoSmallestNums([2, 9, 6, -1])); // แสดงผล: 8 (2 + 6)
console.log(sumTwoSmallestNums([1879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); // แสดงผล: 563 (221 + 342)
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); // แสดงผล: 4619 (1617 + 2902)
