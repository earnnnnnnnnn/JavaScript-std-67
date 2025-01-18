// กำหนดตัวแปร status และกำหนดค่าเริ่มต้นเป็น 200
const status = 200;

// ตรวจสอบเงื่อนไขด้วย if-else
if (status === 200) {
    // ถ้าค่า status เท่ากับ 200 จะแสดงข้อความ "OK!"
    console.log('OK!');
} else if (status === 400) {
    // ถ้าค่า status เท่ากับ 400 จะแสดงข้อความ "Error!"
    console.log('Error!');
} else {
    // กรณีอื่น ๆ ที่ค่า status ไม่ใช่ 200 หรือ 400 จะแสดงข้อความ "Unknown status"
    console.log('Unknown status');
}
