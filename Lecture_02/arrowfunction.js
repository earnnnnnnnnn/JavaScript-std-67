// ฟังก์ชันลูกศรแบบย่อ (Concise arrow function)
// ฟังก์ชัน add รับพารามิเตอร์สองตัว (a และ b) และคืนค่าผลรวมของทั้งสอง
const add = (a, b) => a + b;
console.log(add(1, 2)); // แสดงผล: 3

// ฟังก์ชันลูกศรที่มีบล็อกโค้ด (Arrow function with block of code)
// ฟังก์ชัน subtract รับพารามิเตอร์สองตัว (a และ b) คำนวณผลต่างของทั้งสอง
// และเก็บผลลัพธ์ในตัวแปร result ก่อนคืนค่าผลลัพธ์
const subtract = (a, b) => {
    const result = a - b; // คำนวณผลต่าง
    return result; // คืนค่าผลลัพธ์
};

console.log(subtract(4, 2)); // แสดงผล: 2
