// กำหนดตัวแปร status และกำหนดค่าเริ่มต้นเป็น 200
const status = 200;

// ใช้ตัวดำเนินการทางเลือก (Ternary Operator) เพื่อตรวจสอบเงื่อนไข
// ถ้าค่า status เท่ากับ 200 จะกำหนดข้อความในตัวแปร message เป็น 'KO!'
// ถ้าไม่ใช่ จะกำหนดข้อความในตัวแปร message เป็น 'Error'
const message = (status === 200) ? 'KO!' : 'Error';

// แสดงค่าของตัวแปร message
console.log(message); // แสดงผล: KO!
