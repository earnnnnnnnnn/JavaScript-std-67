function findTimeDifferenceInSeconds(startTime, endTime) {
    // ฟังก์ชันสำหรับหาความแตกต่างของเวลาระหว่าง startTime และ endTime ในหน่วยวินาที
    const start = new Date(startTime); // แปลง startTime เป็นวัตถุ Date
    const end = new Date(endTime); // แปลง endTime เป็นวัตถุ Date

    const diff = (end - start) / 1000; // คำนวณความแตกต่างของเวลาในหน่วยมิลลิวินาทีและแปลงเป็นวินาที
    return diff; // คืนค่าความแตกต่างของเวลาในหน่วยวินาที
}

const startTime = "2023-03-15 08:20:00"; // เวลาจุดเริ่มต้น
const endTime = "2023-03-15 09:45:00"; // เวลาจุดสิ้นสุด
console.log(findTimeDifferenceInSeconds(startTime, endTime)); 
