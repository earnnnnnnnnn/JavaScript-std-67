// กำหนดตัวแปร status เป็น 500
const status = 500;

// ตรวจสอบเงื่อนไขด้วย if-else
// ถ้าค่า status เท่ากับ 200 จะแสดงข้อความ "OK!"
if (status === 200){
    console.log('OK!');
// ถ้าค่า status เท่ากับ 400 หรือ 500 จะแสดงข้อความ "Error!"
}else if (status === 400 || status === 500){
    console.log('Error!');
// ถ้าไม่ใช่ทั้ง 200, 400, หรือ 500 จะแสดงข้อความ "Unknown status"
}else {
    console.log('Unknown status');
}
