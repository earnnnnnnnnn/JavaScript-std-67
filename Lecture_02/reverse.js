// ฟังก์ชัน reverseString ใช้ในการย้อนกลับสตริง
function reverseString(value) {
    // สร้างตัวแปร reversedValue เพื่อเก็บค่าของสตริงที่ย้อนกลับ
    let reversedValue = "";

    // แยกสตริง value ออกเป็นอาร์เรย์ของตัวอักษร โดยใช้ฟังก์ชัน split("")
    // แล้วใช้ forEach เพื่อวนลูปแต่ละตัวอักษร
    value.split("").forEach((char) => {
        // เพิ่มตัวอักษรที่วนลูปเข้ามาด้านหน้าของ reversedValue
        reversedValue = char + reversedValue;
    });

    // คืนค่าของ reversedValue ที่เก็บสตริงที่ย้อนกลับแล้ว
    return reversedValue;
}

// ทดสอบฟังก์ชัน reverseString โดยการให้ค่า "Reverse Me"
// ซึ่งจะคืนค่าเป็น "eM esreveR"
console.log(reverseString("Reverse Me")); // แสดงผล: "eM esreveR"
