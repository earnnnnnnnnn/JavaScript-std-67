// กำหนดตัวแปร peple เป็นอาร์เรย์ที่มีค่าชื่อ "Aaron", "Mel", และ "John"
const peple = ["Aaron", "Mel", "John"];

// กำหนดตัวแปร one เป็นค่าจำนวนเต็ม 1
const one = 1;

// กำหนดตัวแปร str เป็นข้อความ "Hello World"
const str = "Hello World";

// กำหนดตัวแปร b เป็นค่าความจริง (Boolean) true
const b = true;

// กำหนดตัวแปร employee เป็นออบเจ็กต์ที่มีคุณสมบัติ firstName และ lastName
const employee = {
    firstName: "Anirach", // ชื่อพนักงาน
    lastName: "Mingkhwan", // นามสกุลพนักงาน
};

// ฟังก์ชัน sayHello รับพารามิเตอร์ person และแสดงข้อความ "Hello" พร้อมกับค่า firstName ของ person
function sayHello(person) {
    console.log("Hello " + person.firstName); // แสดงคำทักทาย
}

// ใช้ typeof เพื่อตรวจสอบประเภทของตัวแปร peple
console.log(typeof people); // **ข้อผิดพลาด**: ตัวแปร "peple" เขียนผิดจาก "people"

// ใช้ typeof เพื่อตรวจสอบประเภทของตัวแปร sayHello
console.log(typeof sayHello); // แสดงผล: function

// ใช้ instanceof เพื่อตรวจสอบว่า employee เป็นอาร์เรย์หรือไม่
console.log(employee instanceof Array); // แสดงผล: false เนื่องจาก employee เป็นออบเจ็กต์

// เรียกใช้ฟังก์ชัน sayHello พร้อมส่ง employee เป็นพารามิเตอร์
sayHello(employee); // แสดงผล: Hello Anirach
