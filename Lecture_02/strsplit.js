// กำหนดสตริง str ที่มีข้อความ "The quick brown fox jumps over the lazy dog."
const str = 'The quick brown fox jumps over the lazy dog.';

// ใช้ split(' ') แยกสตริง str ออกเป็นอาร์เรย์ของคำ โดยแยกด้วยช่องว่าง
const words = str.split(' ');

// แสดงผลคำที่อยู่ในตำแหน่งที่ 3 (เริ่มนับจาก 0) ของอาร์เรย์ words
// คำที่ตำแหน่ง 3 คือ "fox"
console.log(words[3]); 
// คาดหวังผลลัพธ์: "fox"

// ใช้ split('') แยกสตริง str ออกเป็นอาร์เรย์ของตัวอักษร โดยแยกด้วยตัวอักษรแต่ละตัว
const chars = str.split('');

// แสดงผลตัวอักษรที่อยู่ในตำแหน่งที่ 8 ของอาร์เรย์ chars
// ตัวอักษรที่ตำแหน่ง 8 คือ "k"
console.log(chars[8]); 
// คาดหวังผลลัพธ์: "k"
