// Apiwat Ketsawong

function jumpingProg(num, arr) {
    const stone = arr.length; // จำนวนก้อนหินทั้งหมดในแถว
    const jump = new Array(stone + 1).fill(Infinity); // อาร์เรย์ที่เก็บจำนวนการกระโดดที่ต้องใช้ในการไปถึงแต่ละจุด
    jump[0] = 1; // จุดเริ่มต้นที่ตำแหน่ง 0 ใช้การกระโดด 1 ครั้ง

    // ลูปเพื่อหาวิธีที่ดีที่สุดในการกระโดดจากก้อนหินแต่ละก้อน
    for (let i = 0; i < stone; i++) { 
        for (let j = 1; j <= num && i + j <= stone; j++) {
            if (arr[i] === j) { // หากค่าที่สามารถกระโดดจากตำแหน่ง i คือ j
                jump[i + j] = Math.min(jump[i + j], jump[i] + 1); // อัพเดตจำนวนการกระโดดที่น้อยที่สุด
            } 
        }
    }

    // ตรวจสอบผลลัพธ์
    return jump[stone] === Infinity ? "no chance :-{" : jump[stone]; // ถ้าไม่สามารถไปถึงจุดสุดท้ายได้ ให้คืนค่า "no chance :-{"
}

// ตัวอย่างการใช้งาน
console.log(jumpingProg(5, [1, 1, 1, 1, 1])); // 5
console.log(jumpingProg(5, [1, 3, 1, 1, 1])); // 4
console.log(jumpingProg(5, [1, 1, 0, 1, 1])); // "no chance :-{"
