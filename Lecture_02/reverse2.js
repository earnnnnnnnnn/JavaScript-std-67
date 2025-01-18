// ฟังก์ชัน reverseString ใช้ในการย้อนกลับสตริง
function reverseString(value) {
     // ใช้ split('') แยกสตริงเป็นอาร์เรย์ของตัวอักษร
     // จากนั้นใช้ reverse() เพื่อย้อนกลับอาร์เรย์
     // สุดท้ายใช้ join('') รวมอาร์เรย์กลับเป็นสตริง
     const reversedValue = value.split('').reverse().join('');
     
     // คืนค่าสตริงที่ย้อนกลับแล้ว
     return reversedValue;
}

// ทดสอบฟังก์ชัน reverseString โดยการให้ค่า "Hello JavaScript"
// ซึ่งจะคืนค่าเป็น "tpircSavaJ olleH"
console.log(reverseString("Hello JavaScript")); // แสดงผล: "tpircSavaJ olleH"
