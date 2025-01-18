// Apiwat Ketsawong

function bomb(sensors) {
    const area = 51; // กำหนดขนาดพื้นที่ให้เป็น 51x51
    const speedOfsound = 0.343; // ความเร็วเสียงในหน่วยกิโลเมตรต่อวินาที

    // คำนวณตำแหน่งและระยะทางจากข้อมูลเซ็นเซอร์
    const positions = sensors.map(sensor => {
        const positionX = sensor[0] % area; // ตำแหน่ง X อยู่ในช่วงพื้นที่ (mod 51)
        const positionY = sensor[1] % area; // ตำแหน่ง Y อยู่ในช่วงพื้นที่ (mod 51)
        const distance = sensor[2] * speedOfsound; // ระยะทางจากเวลา (เวลา * ความเร็วเสียง)
        return { positionX, positionY, distance }; // เก็บตำแหน่งและระยะทางเป็น object
    });

    // นิยามวงกลม 3 วงที่ใช้หาจุดตัด
    const circle1 = { h: positions[0].positionX, k: positions[0].positionY, r: positions[0].distance };
    const circle2 = { h: positions[1].positionX, k: positions[1].positionY, r: positions[1].distance };
    const circle3 = { h: positions[2].positionX, k: positions[2].positionY, r: positions[2].distance };

    // สร้างสมการเชิงเส้นที่ 1 (จากวงกลม 1 และวงกลม 2)
    const a11 = 2 * (circle2.h - circle1.h); // ค่าสัมประสิทธิ์ x
    const a12 = 2 * (circle2.k - circle1.k); // ค่าสัมประสิทธิ์ y
    const b1 = circle2.r**2 - circle1.r**2 - circle2.h**2 + circle1.h**2 - circle2.k**2 + circle1.k**2; // ค่าคงที่

    // สร้างสมการเชิงเส้นที่ 2 (จากวงกลม 2 และวงกลม 3)
    const a21 = 2 * (circle3.h - circle2.h); // ค่าสัมประสิทธิ์ x
    const a22 = 2 * (circle3.k - circle2.k); // ค่าสัมประสิทธิ์ y
    const b2 = circle3.r**2 - circle2.r**2 - circle3.h**2 + circle2.h**2 - circle3.k**2 + circle2.k**2; // ค่าคงที่

    // คำนวณค่า determinant เพื่อใช้ในการแก้ระบบสมการ
    const det = a11 * a22 - a12 * a21; // คำนวณ determinant หลัก
    const detX = b1 * a22 - a12 * b2; // determinant สำหรับ x
    const detY = a11 * b2 - b1 * a21; // determinant สำหรับ y

    // ตรวจสอบว่าระบบสมการสามารถแก้ได้หรือไม่ (det != 0)
    if (det === 0) throw "Unable to calculate intersection point"; // หาก det เท่ากับ 0 แสดงว่าไม่มีจุดตัด

    // คำนวณพิกัดจุดตัด (ตำแหน่งระเบิด) โดยใช้ Cramer's Rule
    const intersection_X = Math.abs(Math.round(detX / det)); // ตำแหน่ง X ของจุดตัด
    const intersection_Y = Math.abs(Math.round(detY / det)); // ตำแหน่ง Y ของจุดตัด
    return [intersection_X, intersection_Y]; // ส่งคืนพิกัดจุดตัด
}

// ตัวอย่างการใช้งาน
console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]])); // [25, 25]
console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // [50, 50]
console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]])); // [19, 19]
console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]])); // [20, 18]
