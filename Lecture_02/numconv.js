// กำหนดตัวแปร num1 และ flo1 เป็นสตริง '150' และ '1.50'
let num1 = '150';
let flo1 = '1.50';

console.log("*********Converting strings to integers*********");
// การแปลงสตริงเป็นจำนวนเต็ม (integers)
// ใช้ฟังก์ชัน parseInt() เพื่อแปลงสตริงให้เป็นจำนวนเต็ม

console.log(parseInt('100')); // แสดงผล: 100
console.log(parseInt(num1)); // แสดงผล: 150
console.log(parseInt('ABC')); // แสดงผล: NaN (ไม่สามารถแปลงเป็นจำนวนเต็มได้)
console.log(parseInt('0xF')); // แสดงผล: 15 (เป็นเลขฐาน 16 หรือ hexadecimal)

// การแปลงสตริงเป็น float (จำนวนทศนิยม)
console.log("**********Converting strings to float********");
// ใช้ฟังก์ชัน parseFloat() เพื่อแปลงสตริงให้เป็นจำนวนทศนิยม

console.log(parseFloat('1.25abc')); // แสดงผล: 1.25 (แปลงเฉพาะตัวเลขในส่วนต้นของสตริง)
console.log(parseFloat(flo1)); // แสดงผล: 1.5
console.log(parseFloat('ABC')); // แสดงผล: NaN (ไม่สามารถแปลงเป็นจำนวนทศนิยมได้)

// ตัวอย่างการแปลงเพิ่มเติม
console.log("************More Conversion Examples*********");
// ตัวเลขหลังอักขระพิเศษจะถูกมองข้าม
console.log(parseInt('1.5')); // แสดงผล: 1 (แปลงเฉพาะส่วนที่เป็นตัวเลขก่อนจุดทศนิยม)
console.log(parseInt('1 + 1')); // แสดงผล: 1 (parseInt จะอ่านเฉพาะตัวเลขที่อยู่ที่ต้นข้อความ)

// ใช้เทมเพลตสตริง (Template Literals) ในการแปลง
console.log(parseInt(`${1 + 1}`)); // แสดงผล: 2 (ผลรวมของ 1+1 จะถูกแปลงเป็นสตริง '2' ก่อนแปลงเป็นจำนวนเต็ม)

console.log("*********Converting numbers to strings*********");
// การแปลงตัวเลขเป็นสตริง
console.log(num1.toString()); // แสดงผล: '150' (แปลงจำนวนเต็มเป็นสตริง)
console.log(flo1.toString()); // แสดงผล: '1.50' (แปลงจำนวนทศนิยมเป็นสตริง)
console.log((100).toString()); // แสดงผล: '100' (แปลงจำนวนเต็มเป็นสตริง)
