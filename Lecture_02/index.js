// กำหนดตัวแปร message และ place เป็นข้อความ "Hello" และ "World"
const message = "Hello";
const place = "World";

// แสดงข้อความ "Hell,Word" โดยตรง โดยไม่ใช้ตัวแปร
console.log('Hell,Word'); // แสดงผล: Hell,Word

// ใช้การแทนที่ (substitution) โดยใช้ %s เพื่อแทนที่ค่าในตัวแปร place
console.log('Hello,%s', place); // แสดงผล: Hello,World

// ใช้เทมเพลตสตริง (template literal) เพื่อรวมข้อความจากตัวแปร message และ place
console.log(`${message},${place}!`); // แสดงผล: Hello,World!
