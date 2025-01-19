// ฟังก์ชัน removeDups ใช้ในการลบค่าซ้ำจากอาร์เรย์
function removeDups(items) {
    let seen = new Set(); // สร้าง Set เพื่อเก็บค่าที่เจอแล้ว
    return items.filter(item => { // ใช้ filter เพื่อเลือกค่าที่ไม่ซ้ำ
        if (!seen.has(item)) { // ถ้าค่ายังไม่เคยเจอ
            seen.add(item); // เพิ่มค่านั้นลงใน Set
            return true; // เก็บค่านั้นไว้ในอาร์เรย์ผลลัพธ์
        }
        return false; // ไม่เก็บค่านั้นถ้ามีการซ้ำ
    });
}

console.log(removeDups([1, 0, 1, 0])); // แสดงผล: [1, 0] (ลบค่าซ้ำออก)
console.log(removeDups(["The", "big", "cat"])); // แสดงผล: ["The", "big", "cat"] (ไม่มีค่าซ้ำ)
console.log(removeDups(["John", "Taylor", "John"])); // แสดงผล: ["John", "Taylor"] (ลบค่าซ้ำออก)
