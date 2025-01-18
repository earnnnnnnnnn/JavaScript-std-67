// ประกาศตัวแปร hello ด้วย var และกำหนดค่าเป็น "Hello"
var hello = "Hello";

// แสดงค่าของตัวแปร hello
console.log(hello); // แสดงผล: Hello

// เปลี่ยนค่าของตัวแปร hello เป็น "Hello World"
hello = "Hello World";

// แสดงค่าของตัวแปร hello หลังจากเปลี่ยนแปลง
console.log(hello); // แสดงผล: Hello World

// ใช้โครงสร้าง if และประกาศตัวแปร Word ด้วย let ภายในบล็อก
if (true) {
    let Word = "Hello World"; // ตัวแปร Word มีขอบเขตอยู่ภายในบล็อกนี้เท่านั้น
    console.log(Word); // แสดงผล: Hello World
}

// คำสั่งด้านล่างจะแสดงข้อผิดพลาด เนื่องจากตัวแปร Word ไม่สามารถเข้าถึงได้จากภายนอกบล็อก
// console.log(Word);

// ประกาศตัวแปร fixval ด้วย const และกำหนดค่าเป็น "Fix Value"
const fixval = "Fix Value";

// แสดงค่าของตัวแปร fixval
console.log(fixval); // แสดงผล: Fix Value

// คำสั่งด้านล่างจะแสดงข้อผิดพลาด เนื่องจากตัวแปรที่ประกาศด้วย const ไม่สามารถเปลี่ยนค่าได้
// fixval = "tes assigne value to const";
