// Apiwat Ketsawong

// ฟังก์ชัน isValidIP: ตรวจสอบว่า string ที่รับมาเป็น IP Address ที่ถูกต้องหรือไม่
function isValidIP(str) {
    // แปลง string เป็นอาร์เรย์ โดยใช้ '.' เป็นตัวแบ่ง แล้วเปลี่ยนแต่ละกลุ่มตัวเลขเป็นอาร์เรย์ของตัวอักษร
    const check = str.split('.').map(m => m.split(''));

    // ตรวจสอบว่ามี 4 ส่วน (IP Address ต้องมี 4 กลุ่มตัวเลข)
    if (check.length === 4) {
        // ลูปผ่านแต่ละกลุ่มในอาร์เรย์ check
        for (let i = 0; i < check.length; i++) {
            // ลูปผ่านแต่ละตัวอักษรในกลุ่มที่เลือก
            for (let j = 0; j < check[i].length; j++) {
                // แปลงกลุ่มตัวเลขกลับเป็นตัวเลขเต็ม และตรวจสอบว่าอยู่ในช่วง 1 ถึง 254
                if (parseInt(check[i].join('')) < 1 || parseInt(check[i].join('')) >= 255) {
                    return false; // หากตัวเลขอยู่นอกช่วง ให้คืนค่า false
                }
                // ตรวจสอบว่ากลุ่มตัวเลขมีเลข 0 นำหน้า (ไม่อนุญาตให้เริ่มต้นด้วย 0 เช่น "012")
                else if (check[i][0] === '0') {
                    return false; // คืนค่า false หากเริ่มต้นด้วยเลข 0
                }
            }
        }
        return true; // คืนค่า true หากตรวจสอบทุกเงื่อนไขผ่าน
    } 
    // หาก string ไม่ได้มี 4 ส่วน ให้คืนค่า false
    else return false;
}

// ทดสอบฟังก์ชันด้วยตัวอย่าง
console.log(isValidIP("1.2.3.4"));         // ผลลัพธ์: true (IP Address ถูกต้อง)
console.log(isValidIP("1.2.3"));           // ผลลัพธ์: false (มีน้อยกว่า 4 กลุ่ม)
console.log(isValidIP("1.2.3.4.5"));       // ผลลัพธ์: false (มีมากกว่า 4 กลุ่ม)
console.log(isValidIP("123.45.67.89"));    // ผลลัพธ์: true (IP Address ถูกต้อง)
console.log(isValidIP("123.456.78.90"));   // ผลลัพธ์: false (ตัวเลขบางกลุ่มเกิน 255)
console.log(isValidIP("123.045.067.089")); // ผลลัพธ์: false (ตัวเลขมีเลข 0 นำหน้า)
