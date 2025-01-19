const array0FNumber = [1, 2, 3, 4]; // กำหนด array ที่มีตัวเลข

// ใช้ reduce เพื่อละลายค่าใน array โดยนำค่าทั้งหมดมารวมกัน
const sum = array0FNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // เพิ่มค่าของ accumulator กับ currentValue
});

console.log(sum); // แสดงผลลัพธ์ที่ได้จากการรวมค่าทั้งหมดใน array ซึ่งคือ 10
