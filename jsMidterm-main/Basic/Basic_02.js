function highestDigit(num) {
    // แปลงหมายเลข num เป็นสตริง และแยกตัวเลขในสตริงออกเป็นอาร์เรย์
    return Math.max(...String(num).split(''));  
    // ใช้ Math.max เพื่อหาค่าที่มากที่สุดจากอาร์เรย์ที่มีตัวเลขในสตริง
    // ... ใช้ spread operator เพื่อแยกแต่ละตัวอักษรในอาร์เรย์ให้กลายเป็นอาร์กิวเมนต์ที่สามารถใช้ได้ใน Math.max
}

console.log(highestDigit(379));  // ผลลัพธ์ที่ได้คือ 9
console.log(highestDigit(2));    // ผลลัพธ์ที่ได้คือ 2
console.log(highestDigit(377401)); // ผลลัพธ์ที่ได้คือ 7
