// กำหนดฟังก์ชัน plusFive ที่รับพารามิเตอร์ number และคืนค่าผลรวมของ number และ 5
let plusFive = (number) => {
    return number + 5;
};

// กำหนดให้ตัวแปร f เป็นฟังก์ชัน plusFive
let f = plusFive;

// ทดสอบการเรียกใช้งานฟังก์ชัน plusFive โดยส่งค่า 3
console.log(plusFive(3)); // แสดงผล: 8 (3 + 5 = 8)

// เนื่องจาก f เป็นฟังก์ชันที่เก็บค่าของ plusFive ไว้ จึงสามารถเรียกใช้งานได้เช่นกัน
console.log(f(9)); // แสดงผล: 14 (9 + 5 = 14)
