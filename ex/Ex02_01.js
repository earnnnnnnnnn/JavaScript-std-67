// ฟังก์ชัน findPerimeter คำนวณหาความยาวเส้นรอบรูปของสี่เหลี่ยม
function findPerimeter(length, width) {
    // คืนค่าความยาวเส้นรอบรูป = 2 * (ความยาว + ความกว้าง)
    return 2 * (length + width);
}

// ทดสอบการเรียกใช้งานฟังก์ชันด้วยค่าความยาวและความกว้างต่าง ๆ
console.log(findPerimeter(6, 7));  // คำนวณเส้นรอบรูปของสี่เหลี่ยมที่มีความยาว 6 และความกว้าง 7
console.log(findPerimeter(20, 10)); // คำนวณเส้นรอบรูปของสี่เหลี่ยมที่มีความยาว 20 และความกว้าง 10
console.log(findPerimeter(2, 9));  // คำนวณเส้นรอบรูปของสี่เหลี่ยมที่มีความยาว 2 และความกว้าง 9
