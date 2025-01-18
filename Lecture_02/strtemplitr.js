// การเชื่อมสตริงด้วยเทมเพลตลิเทอรัล
console.log("\n********Concatenation with template literals********\n");

// กำหนดตัวแปร str1 และ str2
let str1 = "JavaScript";
let str2 = "fun";

// ใช้เทมเพลตลิเทอรัลในการเชื่อมสตริง
// การแทรกค่าของ str1 ลงในข้อความ
console.log(`I am writing code in ${str1}`); // แสดงผล: I am writing code in JavaScript

// การแทรกค่าของ str1 และ str2 ลงในข้อความ
console.log(`Formatting in ${str1} is ${str2}!`); // แสดงผล: Formatting in JavaScript is fun!

// การใช้เอ็กซ์เพรสชันในเทมเพลตลิเทอรัล
console.log("\n********Expressions in template literals********\n");

// กำหนดตัวแปร bool1
let bool1 = true;

// การใช้เทมเพลตลิเทอรัลเพื่อคำนวณและแสดงผลลัพธ์ของการบวก 1 + 1
console.log(`1 + 1 is ${1 + 1}`); // แสดงผล: 1 + 1 is 2

// การใช้เทมเพลตลิเทอรัลเพื่อแสดงผลลัพธ์ของการตรงข้ามค่า bool1
console.log(`The opposite of true is ${!bool1}`); // แสดงผล: The opposite of true is false
