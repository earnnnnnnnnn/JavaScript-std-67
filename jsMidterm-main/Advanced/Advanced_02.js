// Apiwat Ketsawong

function frequencySort(str) {
    // สร้างตัวแปรเก็บข้อมูลของแต่ละตัวอักษร
    const obj = [];
    
    // แปลง string เป็น array ของ ASCII และจัดเรียงตามค่า ASCII
    const arrStr = str.split('').map(m => m.charCodeAt()).sort((a, b) => a - b);

    let currentCount = 1; // ตัวนับจำนวนครั้งที่ตัวอักษรปรากฏ
    for (let i = 1; i <= arrStr.length; i++) { // วนลูปผ่าน array ที่เรียงแล้ว
        if (arrStr[i] === arrStr[i - 1]) { 
            currentCount++; // ถ้าตัวอักษรถัดไปเหมือนกับตัวก่อนหน้า ให้นับเพิ่ม
        } else {
            // ถ้าตัวอักษรถัดไปไม่เหมือนกับตัวก่อนหน้า ให้สร้าง object เก็บข้อมูล
            const test = {
                loop: currentCount, // จำนวนครั้งที่ตัวอักษรปรากฏ
                ascii: arrStr[i - 1] // ค่า ASCII ของตัวอักษร
            }
            obj.push(test); // เพิ่ม object ลงใน array
            currentCount = 1; // รีเซ็ตตัวนับ
        }
    }

    // จัดเรียง array ตามจำนวนครั้งที่ตัวอักษรปรากฏ (มากไปน้อย)
    const result = obj
        .sort((a, b) => b.loop - a.loop)
        .flatMap(entry => Array(entry.loop).fill(entry.ascii)) // สร้าง array ที่แต่ละตัวอักษรถูกทำซ้ำตามจำนวนครั้งที่ปรากฏ
        .filter(value => value); // กรองค่าที่ไม่ใช่ ASCII ออก

    // แปลง array ของ ASCII กลับเป็น string
    return Array.from(result, charCode => String.fromCharCode(charCode)).join('');
}

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
console.log(frequencySort("tree"));  // ผลลัพธ์: "eert" (หรือ "eetr")
console.log(frequencySort("cccaaa"));  // ผลลัพธ์: "aaaccc"
console.log(frequencySort("Aabb"));  // ผลลัพธ์: "bbAa" (หรือ "bbaA")
