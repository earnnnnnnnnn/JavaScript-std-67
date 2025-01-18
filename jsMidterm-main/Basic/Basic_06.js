// ฟังก์ชัน removeDups: ใช้สำหรับลบค่าซ้ำในอาร์เรย์
function removeDups(arr) {
    // ใช้ arr.filter() เพื่อกรองค่าที่ไม่ซ้ำจากอาร์เรย์
    const result = arr.filter((value, index, self) => {
        // filter จะวนลูปผ่านแต่ละค่าในอาร์เรย์และตรวจสอบว่าค่าที่เจอเป็นค่าที่ไม่ซ้ำ
        // value คือค่าของอาร์เรย์ในแต่ละรอบ
        // index คือดัชนีของค่าในอาร์เรย์
        // self คืออาร์เรย์ต้นฉบับที่กำลังถูกวนลูป
        return self.indexOf(value) === index; // ถ้า indexOf(value) เท่ากับ index หมายความว่า ค่านั้นเป็นค่าที่พบครั้งแรก
    });
    return result; // คืนค่าอาร์เรย์ที่กรองแล้ว ซึ่งไม่มีค่าซ้ำ
}

// ตัวอย่างการใช้ฟังก์ชัน
console.log(removeDups([1,0,1,0]));  // ผลลัพธ์: [1, 0]
console.log(removeDups(["The","big","cat"]));  // ผลลัพธ์: ["The", "big", "cat"]
console.log(removeDups(["John","Taylor","John"]));  // ผลลัพธ์: ["John", "Taylor"]
