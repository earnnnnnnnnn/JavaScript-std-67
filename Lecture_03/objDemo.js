/* START */

// วิธีการที่คุณสามารถแสดงวัตถุในโลกจริงในโค้ดได้อย่างไร?
// พวกมันมีคุณลักษณะที่เกี่ยวข้อง = properties ของ object
// พวกมันมีการกระทำที่เกี่ยวข้อง = methods ของ object
// พวกมันมีบริบทที่เกี่ยวข้อง = "this"


// ขั้นแรก:
// มาสร้าง object ที่เรียบง่าย (ไม่มี properties หรือ methods)
const blank = {}; // สร้าง object ว่าง
console.log("Blank type:", typeof blank); // แสดงประเภทของ object ว่าเป็น 'object'
console.log("Blank value", blank); // แสดงค่า (หรือค่าว่าง) ของ object


/*
 // ขั้นถัดไป:
 // มาสร้าง object ที่มี PROPERTIES (คุณลักษณะ)
 // Object คือการรวบรวมคู่ชื่อ-ค่า (name-value pairs)
 // แยกกันด้วยเครื่องหมายจุลภาค
 const book = {
     title: "1984", // ชื่อหนังสือ
     author: "George Orwell", // ผู้เขียน
     isAvailable: false // สถานะการมีอยู่ (มีหรือไม่มี)
 };
*/
