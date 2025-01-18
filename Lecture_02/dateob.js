// กำหนดตัวแปร start เพื่อเก็บเวลาปัจจุบันในรูปแบบ timestamp (มิลลิวินาที) โดยใช้ Date.now()
const start = Date.now();

// แสดงข้อความ "starting timer..." เพื่อบอกว่ากำลังเริ่มต้นตัวจับเวลา
console.log('starting timer...');

// ใช้ setTimeout เพื่อกำหนดให้ฟังก์ชันทำงานหลังจากผ่านไป 2000 มิลลิวินาที (2 วินาที)
setTimeout(() => {
    // คำนวณเวลาที่ผ่านไปโดยการลบค่า start จากเวลาปัจจุบัน
    const millis = Date.now() - start;

    // แสดงผลเวลาเป็นวินาทีโดยใช้ Math.floor() เพื่อลดค่าทศนิยม
    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
}, 2000); // ตั้งเวลาหน่วงไว้ 2000 มิลลิวินาที (2 วินาที)
