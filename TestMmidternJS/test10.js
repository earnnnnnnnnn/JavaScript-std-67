// ฟังก์ชัน isValidIP ใช้เพื่อตรวจสอบว่า IP Address ที่ให้มานั้นเป็น IP ที่ถูกต้องหรือไม่
function isValidIP(str) {
    // แยกสตริงตามเครื่องหมายจุด (.) โดยจะแยกออกเป็น array
    const parts = str.split(".");

    // ตรวจสอบจำนวนส่วนที่ได้จากการแยกให้มีทั้งหมด 4 ส่วน ถ้าไม่มีกลับเป็น false
    if (parts.length !== 4) 
        return false;

    // ลูปตรวจสอบแต่ละส่วนของ IP Address
    for (let part of parts) {
        // ตรวจสอบว่าแต่ละส่วนเป็นตัวเลขหรือไม่
        if (!/^\d+$/.test(part)) return false; // ถ้าไม่ใช่ตัวเลข
        const number = parseInt(part, 10);
        
        // ตรวจสอบว่าเป็นตัวเลขที่ไม่เป็น NaN, และอยู่ในช่วง 0 ถึง 255
        if (isNaN(number) || number < 0 || number > 255) return false; 
        
        // ตรวจสอบว่าเลขนำหน้า 0 หรือไม่ ถ้ามีเลขนำหน้า 0 และความยาวมากกว่า 1 จะถือว่าไม่ถูกต้อง
        if (part.length > 1 && part.startsWith("0")) return false; 
    }

    // ถ้าผ่านการตรวจสอบทั้งหมดแล้ว ถือว่า IP ถูกต้อง
    return true;
}

// ทดสอบการใช้งานฟังก์ชัน
console.log(isValidIP("1.2.3.4"));        // แสดงผล: true เนื่องจากเป็น IP ที่ถูกต้อง
console.log(isValidIP("1.2.3"));          // แสดงผล: false เนื่องจากมีส่วนไม่ครบ 4 ส่วน
console.log(isValidIP("1.2.3.4.5"));     // แสดงผล: false เนื่องจากมีส่วนมากเกินไป
console.log(isValidIP("123.45.67.89"));  // แสดงผล: true เนื่องจากเป็น IP ที่ถูกต้อง
console.log(isValidIP("123.456.78.90")); // แสดงผล: false เนื่องจาก 456 เกินกว่า 255
console.log(isValidIP("123.045.067.089")); // แสดงผล: false เนื่องจากมีเลขนำหน้า 0 ในส่วนที่มีมากกว่า 1 หลัก
