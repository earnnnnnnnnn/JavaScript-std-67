const array = [15, 16, 17, 18, 19]; // กำหนด array ที่ประกอบไปด้วยตัวเลข

// ฟังก์ชัน reduce ใช้คำนวณค่าโดยการรวมค่าทั้งหมดใน array
function reduce(accumulator, currentValue, index) {
    // คำนวณผลรวมระหว่าง accumulator กับ currentValue
    const returns = accumulator + currentValue;
    console.log(
        // แสดงข้อมูลที่เกี่ยวข้องในแต่ละรอบของการทำงาน
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns; // ส่งค่าผลรวมกลับไปเป็นค่า accumulator สำหรับรอบถัดไป
}

// ใช้เมธอด reduce() กับ array โดยส่งฟังก์ชัน reduce เป็น callback
array.reduce(reduce);
