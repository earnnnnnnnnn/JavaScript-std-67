// กำหนดตัวแปร name และกำหนดค่าเป็นสตริงว่าง
const name = '';

// ตรวจสอบเงื่อนไขด้วย if-else
// ถ้าค่าของ name เป็นค่าที่ไม่เป็นค่าว่าง (truthy value) จะเข้าสู่เงื่อนไขแรก
// ถ้า name เป็นค่าว่าง (falsy value) จะเข้าสู่ else
if (name) {
    // ถ้า name ไม่เป็นค่าว่าง จะแสดงข้อความ "We have a name!"
    console.log('We have a name!');
} else {
    // ถ้า name เป็นค่าว่าง จะแสดงข้อความ "No name provided"
    console.log('No name provided');
}
