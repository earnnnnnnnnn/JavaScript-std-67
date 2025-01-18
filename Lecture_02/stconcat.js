// กำหนดตัวแปร str1 และ str2 ที่เก็บค่าของสตริง
let str1 = "Hello";
let str2 = "World!";

// การใช้เครื่องหมาย + ในการเชื่อมสตริง
console.log("********Using the + operator*******\n");
// เชื่อม str1 และ str2 ด้วยเครื่องหมาย +
console.log(str1 + str2); // แสดงผล: HelloWorld!

// เชื่อม str1, "Big", และ str2 ด้วยเครื่องหมาย +
console.log(str1 + "Big" + str2); // แสดงผล: HelloBigWorld!

console.log("\n********Adding Spacing********\n");

// เพิ่มช่องว่างระหว่าง str1 และ str2
str1 = "Hello";

// เชื่อม str1 และ str2 โดยมีช่องว่างระหว่างกัน
console.log(str1 + " " + str2); // แสดงผล: Hello World!

// เชื่อม str1, "Big", และ str2 โดยมีช่องว่างระหว่างกัน
console.log(str1 + " Big " + str2); // แสดงผล: Hello Big World!
