function capToFront(str) {
    const upper = []; // สร้างอาเรย์สำหรับเก็บตัวอักษรพิมพ์ใหญ่
    const lower = []; // สร้างอาเรย์สำหรับเก็บตัวอักษรพิมพ์เล็ก

    // วนลูปผ่านตัวอักษรในสตริง str
    for (const char of str) {
        // ตรวจสอบว่า char เป็นตัวอักษรพิมพ์ใหญ่หรือไม่
        if (char === char.toUpperCase()) { 
            upper.push(char); // หากเป็นตัวพิมพ์ใหญ่ เพิ่มตัวอักษรลงในอาเรย์ upper
        } else {
            lower.push(char); // หากเป็นตัวพิมพ์เล็ก เพิ่มตัวอักษรลงในอาเรย์ lower
        }
    }

    // ใช้ .join('') เพื่อรวมตัวอักษรในอาเรย์ upper และ lower แล้วนำมารวมกัน
    const result = upper.join('') + lower.join('');
    return result; // คืนค่าสตริงที่มีตัวอักษรพิมพ์ใหญ่ก่อน ตามด้วยตัวอักษรพิมพ์เล็ก
}

console.log(capToFront("hApPy")); // "APhpy"
console.log(capToFront("moveMENT")); // "MENTmove"
console.log(capToFront("shOrtCAKE")); // "OCAKEshort"
