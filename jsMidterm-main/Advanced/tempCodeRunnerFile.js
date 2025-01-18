// Apiwat Ketsawong

function isAdditive(str) {

    // ฟังก์ชันนี้จะช่วยตรวจสอบว่าเลขในสตริงเป็นเลขที่ตามลำดับฟีโบนัชชี่หรือไม่
    // โดยจะตรวจสอบว่าหมายเลข 2 ตัวบวกกันแล้วได้เลขถัดไปในลำดับ
    function checkAdditive(num1, num2, remaining) {
        // ถ้าไม่มีตัวเลขเหลือในสตริงแล้วก็จะคืนค่า true
        if (remaining.length === 0) return true;

        const sum = num1 + num2;  // ผลรวมของ 2 หมายเลขที่ตรวจสอบ
        const sumStr = sum.toString();  // แปลงผลรวมเป็นสตริงเพื่อเปรียบเทียบ

        // ถ้าผลรวมไม่ตรงกับเริ่มต้นของสตริงที่เหลือก็จะคืนค่า false
        if (!remaining.startsWith(sumStr)) return false;
        
        // ถ้าผลรวมตรง ก็จะเรียกฟังก์ชันนี้ซ้ำเพื่อไปตรวจสอบหมายเลขถัดไป
        return checkAdditive(num2, sum, remaining.substring(sumStr.length));
    }

    // ลูปเช็คตำแหน่งของเลขตัวแรก
    for (let i = 1; i < str.length; i++) { 
        // ลูปเช็คตำแหน่งของเลขตัวที่สอง
        for (let j = i + 1; j < str.length; j++) { 
            // แยกหมายเลขแรกจากตำแหน่งที่ i
            const num1 = parseInt(str.substring(0, i)); 
            // แยกหมายเลขที่สองจากตำแหน่งที่ i ถึง j
            const num2 = parseInt(str.substring(i, j)); 
            // ส่วนที่เหลือของสตริงที่ต้องการตรวจสอบ
            const remaining = str.substring(j); 
            
            // ตรวจสอบว่าเลข 2 ตัวแรกสามารถสร้างลำดับฟีโบนัชชี่ได้หรือไม่
            if (checkAdditive(num1, num2, remaining)) return true;
        }
    }
    
    // ถ้าไม่พบการสร้างลำดับฟีโบนัชชี่ ก็จะคืนค่า false
    return false;
}

// ตัวอย่างการทดสอบฟังก์ชัน
console.log(isAdditive("112358"));  // คาดว่าจะได้ true เพราะ 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5
console.log(isAdditive("129881000"));  // คาดว่าจะได้ true เพราะ 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13
console.log(isAdditive("12988110101891"));  // คาดว่าจะได้ false เนื่องจากไม่สามารถสร้างลำดับฟีโบนัชชี่ได้
console.log(isAdditive("123456789"));  // คาดว่าจะได้ true เพราะ 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13, 8 + 13 = 21
console.log(isAdditive("300045007500"));  // คาดว่าจะได้ false เพราะไม่สามารถสร้างลำดับฟีโบนัชชี่ได้
