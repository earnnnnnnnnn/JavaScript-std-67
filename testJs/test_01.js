// /**
//  * ฟังก์ชัน countString
//  * ใช้ในการนับจำนวนคำ (word), ตัวอักษร (character) หรือสระ (vowel) 
//  * 
//  * @param {string} input - ข้อความที่ต้องการประมวลผล
//  * @param {string} type - ประเภทของการนับ:
//  *                         'w' - นับจำนวนคำ
//  *                         'c' - นับจำนวนตัวอักษร (ไม่รวมช่องว่าง)
//  *                         'v' - นับจำนวนสระ (a, e, i, o, u ทั้งตัวพิมพ์เล็กและพิมพ์ใหญ่)
//  * @returns {number} - ผลลัพธ์เป็นจำนวนตามประเภทที่กำหนด
//  * 
//  * @throws {Error} - หาก type ไม่ใช่ 'w', 'c', หรือ 'v' จะส่ง Error พร้อมข้อความแสดงข้อผิดพลาด
//  */
function countString(input, type) {
    // ตรวจสอบว่าข้อมูล input เป็นข้อความว่างหรือไม่
    if (input === '' || input.trim() === '') {
        return 0; // หากเป็นข้อความว่าง ให้คืนค่าเป็น 0
    }

    // ตรวจสอบว่า type ที่ส่งมาเป็นค่าที่ถูกต้องหรือไม่
    if (type !== 'w' && type !== 'c' && type !== 'v') {
        throw new Error
        ('Invalid parameter "type". Please use "w" for word count, "c" for character count, or "v" for vowel count.');
    }

    // ตัดช่องว่างด้านหน้าและด้านหลังข้อความ
    input = input.trim();

    // ใช้ switch เพื่อแยกการทำงานตามประเภทที่เลือก
    switch (type) {
        case 'w': // กรณีต้องการนับจำนวนคำ
            return input.split(/\s+/).length;

        case 'c': // กรณีต้องการนับจำนวนตัวอักษร (ไม่รวมช่องว่าง)
            return input.replace(/\s+/g, '').length;

        case 'v': // กรณีต้องการนับจำนวนสระ
            const vowels = /[aeiouAEIOU]/g; // นิยามรูปแบบสำหรับการจับสระ
            const matchVowels = input.match(vowels); // ค้นหาสระในข้อความ
            return matchVowels ? matchVowels.length : 0; // คืนค่าจำนวนสระที่พบ หรือ 0 หากไม่พบ

        default:
            throw new Erro
            ('Invalid parameter "type". Please use "w" for word count, "c" for character count, or "v" for vowel count.');
    }
}

// ตัวอย่างการใช้งาน
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

module.exports = countString;

