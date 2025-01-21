// ฟังก์ชันสำหรับคำนวณจำนวนการหมุนและผลลัพธ์ของการหมุน
function calculateRotationTime(number) {
    // สร้างอาร์เรย์เพื่อเก็บค่าหมายเลขที่ถูกหมุน
    const rotationsArray = [number];
    let rotations = 1; // เริ่มต้นการนับการหมุนที่ 1 (หมายเลขเริ่มต้น)

    // วนลูปเพื่อทำการหมุนหมายเลข
    for (let i = 1; i < number.length; i++) {
        // หมุนหมายเลขโดยเอาอักขระตัวแรกไปต่อท้าย
        number = number.slice(1) + number[0];
        // เก็บค่าหมายเลขที่ได้หลังจากหมุนลงในอาร์เรย์
        rotationsArray.push(number);
        // เพิ่มจำนวนการหมุน
        rotations++;
    }

    // ส่งคืนจำนวนการหมุนทั้งหมดและอาร์เรย์ของหมายเลขที่หมุนแล้ว
    return { rotations, rotationsArray };
}

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
console.log(calculateRotationTime("1234"));
// ผลลัพธ์: { rotations: 4, rotationsArray: ['1234', '2341', '3412', '4123'] }

console.log(calculateRotationTime("56789"));
// ผลลัพธ์: { rotations: 5, rotationsArray: ['56789', '67895', '78956', '89567', '95678'] }
