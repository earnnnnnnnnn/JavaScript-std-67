// Apiwat Ketsawong

function isAdditive(str) {

    // ฟังก์ชันช่วยในการตรวจสอบว่าค่า num1 และ num2 สามารถสร้างลำดับที่เพิ่มขึ้นได้หรือไม่
    function checkAdditive(num1, num2, remaining) {
        // ถ้าไม่มีค่าเหลือแล้ว แสดงว่าเป็นลำดับที่ถูกต้อง
        if (remaining.length === 0) return true;

        // คำนวณผลบวกของ num1 และ num2
        const sum = num1 + num2; 
        const sumStr = sum.toString(); // แปลงผลบวกเป็นสตริง

        // ถ้า remaining ไม่เริ่มต้นด้วยผลบวก แสดงว่าไม่ใช่ลำดับที่เพิ่มขึ้น
        if (!remaining.startsWith(sumStr)) return false;
        
        // เรียกฟังก์ชันช่วยซ้ำกับค่าใหม่
        return checkAdditive(num2, sum, remaining.substring(sumStr.length));
    }

    // ลูปผ่านทุกคู่ของตัวเลขในสตริง
    for (let i = 1; i < str.length; i++) { 
        for (let j = i + 1; j < str.length; j++) { 
            const num1 = parseInt(str.substring(0, i)); // แปลงตัวเลขแรก
            const num2 = parseInt(str.substring(i, j)); // แปลงตัวเลขที่สอง
            const remaining = str.substring(j); // ตัวเลขที่เหลือ
            
            // เช็คว่า num1 และ num2 สามารถเป็นลำดับที่เพิ่มขึ้นได้
            if (checkAdditive(num1, num2, remaining)) return true;
        }
    }
    
    // ถ้าไม่สามารถหาลำดับที่เพิ่มขึ้นได้
    return false;
}

// ตัวอย่างการใช้งาน
console.log(isAdditive("112358")); // true
console.log(isAdditive("129881000")); // false
console.log(isAdditive("12988110101891")); // false
console.log(isAdditive("123456789")); // false
console.log(isAdditive("300045007500")); // false
