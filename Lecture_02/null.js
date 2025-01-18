// ฟังก์ชัน getVowels รับพารามิเตอร์ str เป็นข้อความ
// ใช้เมธอด match() เพื่อจับคู่ตัวอักษรที่เป็นสระ (vowels) ทั้งหมดในข้อความ
// โดยใช้ regular expression (/[aeiou]/gi) ที่จะค้นหาตัวอักษร a, e, i, o, u ทั้งหมดโดยไม่สนใจตัวพิมพ์ใหญ่หรือพิมพ์เล็ก
function getVowels(str) {
    // ใช้ match() เพื่อหาตัวอักษรสระทั้งหมดในข้อความ str
    const m = str.match(/[aeiou]/gi);

    // แสดงผลลัพธ์ของการจับคู่ตัวอักษรสระ
    console.log(m);

    // ถ้าไม่มีตัวอักษรสระในข้อความ (m เป็น null) ให้คืนค่า 0
    if (m == null) {
        return 0;
    }

    // คืนค่าจำนวนตัวอักษรสระที่พบในข้อความ
    return m.length;
}

// ทดสอบฟังก์ชัน getVowels โดยใช้ข้อความ "seeing"
console.log(getVowels("seeing")); // แสดงผล: 3
