let arr1 = ["A", true, 2]; // กำหนด array ที่มีค่า "A", true และ 2

console.log("\n********Length and index********\n"); // แสดงข้อความแยกส่วนสำหรับ Length และ index
console.log(arr1.length); // แสดงความยาวของ array (จำนวนสมาชิกใน array)
console.log(arr1[3]); // แสดงค่าที่ index 3 ซึ่งไม่ได้มีค่า (undefined) เพราะไม่มีสมาชิกที่ index นี้
console.log(arr1[2]); // แสดงค่าที่ index 2 ซึ่งเป็นสมาชิกสุดท้ายของ array
console.log(arr1[arr1.length - 1]); // แสดงค่าที่ index ของสมาชิกสุดท้ายโดยใช้ความยาวของ array ลบ 1

console.log("\n********Length and index Part 2********\n"); // แสดงข้อความแยกส่วนสำหรับ Length และ index (ส่วนที่ 2)
let arr3 = Array(3); // สร้าง array ว่างที่มีความยาว 3
arr3[2] = "Adding a value!"; // เพิ่มค่า "Adding a value!" ที่ index 2 ของ array
console.log(arr3[2]); // แสดงค่าที่ index 2 ซึ่งเป็น "Adding a value!"
console.log(arr3[arr3.length - 1]); // แสดงค่าที่ index ของสมาชิกสุดท้าย (ที่ index 2)
console.log(arr3[0]); // แสดงค่าที่ index 0 ซึ่งยังไม่มีค่า (undefined)
console.log(arr3[1]); // แสดงค่าที่ index 1 ซึ่งยังไม่มีค่า (undefined)
