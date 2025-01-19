const kvArray = [
    { key: 1, value: 10}, // กำหนด object ที่มี key และ value
    { key: 2, value: 20},
    { key: 3, value: 30},
];

// ใช้ map เพื่อเปลี่ยนรูปแบบของ array โดยเปลี่ยนจาก object ที่มี key และ value เป็น object ที่มี key เป็น property และ value เป็นค่าของ property
const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // แสดงผล array ใหม่ที่ประกอบด้วย object ที่มี key เป็น property และ value เป็นค่าของ property เช่น [{1: 10}, {2: 20}, {3: 30}]
console.log(kvArray); // แสดงผล array เดิมที่ยังคงเหมือนเดิม
