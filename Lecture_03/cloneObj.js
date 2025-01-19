// การทำสำเนา (Cloning) ของ Object
// วิธีการสำเนา Object มีหลายวิธี เช่น การอ้างอิงโดยตรง (Reference), การใช้ Object.assign(), การใช้ {...x}, และการใช้ JSON

// สร้าง object ชื่อ obj1
const obj1 = {
    person: 'Anirach', // ชื่อบุคคล
    weight: 85         // น้ำหนัก
};

// ตัวเลือกที่ 1: การอ้างอิง object โดยตรง (ถ้าใช้จะชี้ไปที่ obj1 เดียวกัน)
// const obj2 = obj1;

// ตัวเลือกที่ 2: การใช้ Object.assign() สร้างสำเนาของ obj1
// const obj2 = Object.assign({}, obj1);

// ตัวเลือกที่ 3: การใช้ Spread Operator {...} เพื่อทำสำเนา
const obj2 = { ...obj1 };

// เปลี่ยนค่าน้ำหนักใน obj2 โดยไม่กระทบ obj1
obj2.weight = 75;

// แสดงค่า obj1 (ยังคงค่าเดิม)
console.log(obj1);

// แสดงค่า obj2 (เปลี่ยนเฉพาะ weight เป็น 75)
console.log(obj2);
