function calculateTimeDifferenceByUnit(startDate, endDate, unit) {
    // ฟังก์ชัน parseDate: ใช้แปลงสตริงวันที่ให้เป็น Date object
    const parseDate = (dateString) => {
        const [day, month, year, time] = dateString.split(" "); // แยกข้อมูลวัน เดือน ปี และเวลา
        const [hour, minute, second] = time.split(":").map(num => num.padStart(2, '0')); // แยกเวลาเป็นชั่วโมง นาที วินาที
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"]; // ชื่อเดือนทั้งหมด
        const monthIndex = monthNames.indexOf(month); // หาตำแหน่งของเดือนในอาร์เรย์
        return new Date(year, monthIndex, day, hour, minute, second); // สร้าง Date object
    };

    const start = parseDate(startDate); // แปลง startDate เป็น Date object
    const end = parseDate(endDate); // แปลง endDate เป็น Date object
    const diff = Math.abs(end - start); // คำนวณความต่างของเวลาเป็นมิลลิวินาที

    // ตรวจสอบหน่วยเวลา (unit) และคำนวณความต่างในหน่วยที่กำหนด
    switch (unit) {
        case 'seconds': 
            return Math.floor(diff / 1000); // แปลงมิลลิวินาทีเป็นวินาที
        case 'minutes': 
            return Math.floor(diff / (1000 * 60)); // แปลงมิลลิวินาทีเป็นนาที
        case 'hours': 
            return Math.floor(diff / (1000 * 60 * 60)); // แปลงมิลลิวินาทีเป็นชั่วโมง
        case 'days': 
            return Math.floor(diff / (1000 * 60 * 60 * 24)); // แปลงมิลลิวินาทีเป็นวัน
        case 'months': 
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 30)); // แปลงมิลลิวินาทีเป็นเดือน (สมมุติว่า 1 เดือนมี 30 วัน)
        case 'years': 
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); // แปลงมิลลิวินาทีเป็นปี (สมมุติว่า 1 ปีมี 365 วัน)
        default: 
            return "Invalid unit"; // หากหน่วยไม่ถูกต้อง ให้คืนข้อความแจ้งเตือน
    }
}

console.log(calculateTimeDifferenceByUnit("1 March 2022 10:00:00", "1 May 2022 12:30:00", "days"));
// ผลลัพธ์: 61 (ความต่างระหว่างวันที่ในหน่วยวัน)

console.log(calculateTimeDifferenceByUnit("1 March 2022 10:00:00", "1 May 2022 12:30:00", "hours"));
// ผลลัพธ์: 1464 (ความต่างระหว่างวันที่ในหน่วยชั่วโมง)
