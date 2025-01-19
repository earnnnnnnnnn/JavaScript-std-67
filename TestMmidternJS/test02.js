function highestDigit(number) {
    // แปลง number เป็น string แล้วแยกเป็นอักขระแต่ละตัว
    const digits = String(number).split('').map(Number); 
    // ใช้ Math.max เพื่อหาค่าตัวเลขที่ใหญ่ที่สุดใน array
    const maxDigit = Math.max(...digits); 
    return maxDigit; // คืนค่าตัวเลขที่ใหญ่ที่สุด
}

console.log(highestDigit(379));   // แสดงผล: 9 เพราะ 9 คือเลขที่ใหญ่ที่สุดใน 379
console.log(highestDigit(2));     // แสดงผล: 2 เพราะ 2 เป็นตัวเลขเดียว
console.log(highestDigit(377401)); // แสดงผล: 7 เพราะ 7 คือเลขที่ใหญ่ที่สุดใน 377401
