// กำหนดค่า status เป็น 500
const status = 500;

// ใช้คำสั่ง switch เพื่อตรวจสอบค่าของ status
switch (status){
    // กรณี status เป็น 200
    case 200:
        console.log('OK!'); // แสดงผล: OK!
        break; // ออกจากคำสั่ง switch

    // กรณี status เป็น 400 หรือ 500
    case 400: // หรือ
    case 500: // หรือ
        console.log('Error!'); // แสดงผล: Error!
        break; // ออกจากคำสั่ง switch

    // กรณี status ไม่ตรงกับค่าใดๆ ที่กำหนด
    default: // ถ้าไม่ตรงกับกรณีที่ระบุ
        console.log('Unknown status'); // แสดงผล: Unknown status
}
