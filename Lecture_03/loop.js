const names = ['Justin', 'Sarah', 'Christopher']; // กำหนด array ที่มีชื่อบุคคล

// while loop
console.log('-- while --'); // แสดงข้อความบ่งบอกว่าเป็นการใช้ while loop
let index = 0; // กำหนดตัวแปร index เริ่มต้นที่ 0
while (index < names.length) { // เมื่อ index น้อยกว่าความยาวของ array
    const name = names[index]; // ดึงค่าชื่อจาก array ตาม index
    console.log(name); // แสดงชื่อ
    index++; // เพิ่มค่า index ทีละ 1
};

// for loop
console.log(' - for --'); // แสดงข้อความบ่งบอกว่าเป็นการใช้ for loop
for (let index = 0; index < names.length; index++) { // ใช้ for loop วนลูปจนกว่าจะครบจำนวนชื่อใน array
    const name = names[index]; // ดึงค่าชื่อจาก array ตาม index
    console.log(name); // แสดงชื่อ
}

// for of
console.log('-- for of --'); // แสดงข้อความบ่งบอกว่าเป็นการใช้ for...of loop
for (let name of names) { // ใช้ for...of loop วนลูปผ่านค่าใน array
    console.log(name); // แสดงชื่อ
}

// do while loop **sniplet (หมายเหตุ: โค้ด do while loop ถูกตัดออก)
