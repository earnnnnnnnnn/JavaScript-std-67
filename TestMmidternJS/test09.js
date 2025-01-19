// ฟังก์ชัน digitalClock ใช้สำหรับแปลงจำนวนวินาทีเป็นรูปแบบเวลาในรูปแบบ 'HH:MM:SS'
function digitalClock(seconds) {
    // คำนวณชั่วโมง โดยการหารจำนวนวินาทีด้วย 3600 (จำนวนวินาทีใน 1 ชั่วโมง) แล้วหาผลหารของ 24 เพื่อให้อยู่ในช่วง 0-23
    let hours = Math.floor(seconds / 3600) % 24; 
    
    // คำนวณนาที โดยการเอาเศษของการหารวินาทีที่เหลือหลังจากหาชั่วโมงแล้วมาหารด้วย 60
    let minutes = Math.floor(seconds % 3600 / 60); 
    
    // คำนวณวินาที โดยการหาค่าเศษจากการหารวินาทีที่เหลือจากการคำนวณชั่วโมงและนาที
    let secs = seconds % 60; 

    // ทำให้ชั่วโมง, นาที และวินาที เป็นสตริงที่มีความยาว 2 ตัวอักษร โดยเติม '0' ด้านหน้า
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = secs.toString().padStart(2, '0');

    // คืนค่าเวลาในรูปแบบ 'HH:MM:SS'
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// ทดสอบฟังก์ชัน
console.log(digitalClock(5025));    // แสดงผล: 01:23:45 เพราะ 5025 วินาทีเท่ากับ 1 ชั่วโมง 23 นาที 45 วินาที
console.log(digitalClock(61201));   // แสดงผล: 17:00:01 เพราะ 61201 วินาทีเท่ากับ 17 ชั่วโมง 0 นาที 1 วินาที
console.log(digitalClock(87000));   // แสดงผล: 00:10:00 เพราะ 87000 วินาทีเท่ากับ 24 ชั่วโมง 10 นาที 0 วินาที
