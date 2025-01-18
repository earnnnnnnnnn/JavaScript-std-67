// ฟังก์ชัน circumference ใช้ในการคำนวณเส้นรอบวงของวงกลม
// โดยรับพารามิเตอร์ r ซึ่งเป็นรัศมีของวงกลม

function circumference(r) {
    // ตรวจสอบว่า r สามารถแปลงเป็นตัวเลขทศนิยมได้หรือไม่
    // ใช้ Number.parseFloat เพื่อแปลงค่า r เป็นทศนิยม และตรวจสอบว่าเป็น NaN หรือไม่
    if (Number.isNaN(Number.parseFloat(r))) {
        // ถ้าไม่สามารถแปลงเป็นตัวเลขได้ ให้คืนค่า 0
        return 0;
    }
    // ถ้าแปลงเป็นตัวเลขได้ ให้คำนวณเส้นรอบวง (2 * PI * r)
    return parseFloat(r) * 2.0 * Math.PI;
}

// ทดสอบฟังก์ชัน circumference โดยการให้ค่า r เป็น "4.567abcdefgh"
// ซึ่งจะคืนค่าเส้นรอบวงตามค่า r ที่เป็นตัวเลข 4.567
console.log(circumference("4.567abcdefgh")); // แสดงผล: 28.692748679052764

// ทดสอบฟังก์ชัน circumference โดยการให้ค่า r เป็น "abcdefgh"
// ซึ่งไม่สามารถแปลงเป็นตัวเลขได้ ดังนั้นฟังก์ชันจะคืนค่า 0
console.log(circumference("abcdefgh")); // แสดงผล: 0
