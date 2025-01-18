// Apiwat Ketsawong

// ฟังก์ชัน simplePair: ค้นหาคู่ของตัวเลขในอาร์เรย์ที่คูณกันแล้วได้ค่าที่กำหนด (mul)
function simplePair(arr, mul) {
    const result = []; // อาร์เรย์เก็บคู่ที่ตรงตามเงื่อนไข
    const check = [];  // อาร์เรย์เก็บค่าที่คูณกันแล้วได้ mul

    // วนลูปเพื่อหาคู่ตัวเลขที่คูณกันแล้วได้ mul
    for (let i = 0; i < arr.length; i++) { // ลูปตัวแรกในอาร์เรย์
        for (let j = 0; j < arr.length; j++) { // ลูปตัวที่สองในอาร์เรย์
            // เช็คว่าผลคูณของตัวเลขสองตัวเท่ากับ mul และค่าของทั้งสองตัวไม่เหมือนกัน
            if (arr[i] * arr[j] === mul && arr[i] !== arr[j]) {
                check.push(arr[i], arr[j]); // เพิ่มคู่ตัวเลขที่ตรงเงื่อนไขลงในอาร์เรย์ check
            }
        }
    }

    // เช็คว่าอาร์เรย์ check มีค่าหรือไม่
    if (check != '') {
        // วนลูปผ่านค่าที่เก็บไว้ใน check ทีละ 2 ตัว
        for (let i = 0; i < check.length; i += 2) {
            const pair = [check[i], check[i + 1]]; // สร้างอาร์เรย์ใหม่ที่เป็นคู่ตัวเลข
            // เช็คว่าอาร์เรย์ result ยังไม่มีคู่ตัวเลขเดียวกันหรือไม่
            if (!result.some(existing => existing.includes(pair[0]) && existing.includes(pair[1]))) {
                result.push(pair); // เพิ่มคู่ตัวเลขที่ไม่ซ้ำเข้าใน result
            }
        }
        return result; // คืนค่าผลลัพธ์ที่เป็นอาร์เรย์ของคู่ตัวเลข
    }

    return null; // หากไม่มีคู่ตัวเลขที่คูณกันแล้วได้ mul จะคืนค่า null
}

// ตัวอย่างการทดสอบฟังก์ชัน
console.log(simplePair([1, 2, 3], 3)); // [[1, 3]] (1 * 3 = 3)
console.log(simplePair([1, 2, 3], 6)); // [[2, 3]] (2 * 3 = 6)
console.log(simplePair([1, 2, 3], 9)); // null (ไม่มีคู่ตัวเลขที่คูณกันได้ 9)
console.log(simplePair([2, 6, 3, 4], 12)); // [[2, 6], [3, 4]] (2 * 6 = 12 และ 3 * 4 = 12)
