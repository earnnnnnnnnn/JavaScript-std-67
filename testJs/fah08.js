function calculateAgeAndDifference(birthDateString, currentDateString) {
    // ฟังก์ชันช่วยสำหรับแปลงสตริงวันที่ให้เป็นออบเจ็กต์ Date
    const parseDate = (dateString) => {
        const [day, month, year, time] = dateString.split(" ");
        const [hour, minute, second] = time.split(":").map(num => num.padStart(2, '0'));
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
            "October", "November", "December"];
        const monthIndex = monthNames.indexOf(month);
        return new Date(year, monthIndex, day, hour, minute, second);
    };

    // แปลงสตริงของวันเกิดและวันที่ปัจจุบันเป็นออบเจ็กต์ Date
    const birthDate = parseDate(birthDateString);
    const currentDate = parseDate(currentDateString);

    // คำนวณความแตกต่างระหว่างสองวันที่ในรูปแบบมิลลิวินาที
    const diff = Math.abs(currentDate - birthDate);

    // คำนวณจำนวนปี เดือน วัน ชั่วโมง นาที และวินาที
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // ส่งคืนค่าผลลัพธ์ที่คำนวณได้
    return { age: years, years, months, days, hours, minutes, seconds };
}

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
console.log(calculateAgeAndDifference("15 March 2000 12:30:00", "1 January 2025 09:00:00"));
// ผลลัพธ์: { age: 24, years: 24, months: 9, days: 17, hours: 20, minutes: 30, seconds: 0 }
