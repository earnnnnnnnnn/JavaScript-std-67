let str = "Hello"; // กำหนด string ที่ต้องการวนลูป

// ทำงานเหมือนกับ
// for (let char of str) console.log(char); // ใช้ for...of เพื่อวนลูปตัวอักษรใน string

// สร้าง iterator สำหรับ string โดยใช้ Symbol.iterator
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next(); // ดึงค่าถัดไปจาก iterator
    if (result.done) break; // ตรวจสอบสถานะว่า done เป็น true หรือไม่ หากใช่ให้หยุดลูป
    console.log(result.value); // แสดงตัวอักษรทีละตัวจาก string
}
