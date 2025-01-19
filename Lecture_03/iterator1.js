let str = "Hello"; // กำหนด string ที่ต้องการวนลูป

// ทำงานเหมือนกับ
// for (let char of str) console.log(char);

// สร้าง iterator สำหรับ string ด้วย Symbol.iterator
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next(); // ดึงค่าต่อไปจาก iterator
    if (result.done) break; // ถ้า done เป็น true แสดงว่าจบการวนลูปแล้ว ให้ออกจากลูป
    console.log(result.value); // แสดงค่าของตัวอักษรทีละตัว
}
