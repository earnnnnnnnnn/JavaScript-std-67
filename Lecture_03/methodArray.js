let arr1 = ["A", true, 2]; // กำหนด array arr1 ที่มีค่า "A", true และ 2

// Push and pop
console.log("\n********Push and pop********\n"); // แสดงข้อความแยกส่วนสำหรับ Push และ Pop
console.log(arr1.push("new value")); // เพิ่มค่า "new value" ลงใน arr1 และแสดงจำนวนสมาชิกใหม่ของ array
console.log(arr1); // แสดง array หลังจากการเพิ่มค่า
console.log(arr1.pop()); // ลบค่าตัวสุดท้ายออกจาก array และแสดงค่าที่ถูกลบ
console.log(arr1); // แสดง array หลังจากการลบค่า

// Shift and unshift
console.log("\n********Shift and unshift********\n"); // แสดงข้อความแยกส่วนสำหรับ Shift และ Unshift
console.log(arr1.unshift("new value")); // เพิ่มค่า "new value" ที่ตำแหน่งแรกของ array และแสดงจำนวนสมาชิกใหม่ของ array
console.log(arr1); // แสดง array หลังจากการเพิ่มค่า
console.log(arr1.shift()); // ลบค่าตัวแรกออกจาก array และแสดงค่าที่ถูกลบ
console.log(arr1); // แสดง array หลังจากการลบค่า

// Concat
console.log("\n********Concat********\n"); // แสดงข้อความแยกส่วนสำหรับการใช้ concat
let arr2 = ["B", false, 3]; // กำหนด array arr2 ที่มีค่า "B", false และ 3
let newArr = arr1.concat(arr2); // รวม arr1 และ arr2 เป็น array ใหม่
let newArr2 = arr2.concat([1, 2, 3]); // รวม arr2 และ array ใหม่ที่มีค่า 1, 2, 3
console.log(newArr); // แสดง array ใหม่ที่ได้จากการรวม arr1 และ arr2
console.log(newArr2); // แสดง array ใหม่ที่ได้จากการรวม arr2 และ [1, 2, 3]
