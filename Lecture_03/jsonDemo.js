/*************************************************
 * JavaScript for Beginners
 * JS101 - JSON DEMO
 * 
 * BASICS    : JSON Format
 * STRINGIFY : Javascript to JSON
 * PARSE     : JSON to JavaScript
 *************************************************/

// คิดถึง JavaScript ที่มีข้อมูล (ค่าของ property)
const book = new Object({ title: "1984", author: "George Orwell" }); // สร้าง object book โดยใช้ new Object()
console.log("\n--------");
console.log(typeof book); // แสดงประเภทของ object (จะได้ผลลัพธ์เป็น 'object')
console.log(book); // แสดงค่าของ object book

/*
 // คุณสามารถมี collection ของ object เหล่านี้ได้
 const myBooks = [
     new Object({ title: "1984", author: "George Orwell" }), // สร้าง object ของแต่ละเล่ม
     new Object({ title: "Becoming", author: "Michelle Obama" }),
     new Object({ title: "Snow Crash", author: "Neal Stephenson" }),
     new Object({ title: "Predictably Irrational", author: "Dan Ariely" }),
 ];
*/
