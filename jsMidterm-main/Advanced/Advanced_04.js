// Apiwat Ketsawong

function secretWord(str, number) {
    const word01 = []; // เก็บกลุ่มข้อความย่อยที่แบ่งจาก str ในช่วงแรก
    const word02 = []; // เก็บกลุ่มข้อความย่อยที่เหลือจาก str
    const divide = Math.floor(str.length / (number * 2)); // จำนวนรอบที่จะแบ่งข้อความใน word01

    // แบ่งข้อความ str เป็นกลุ่มย่อยและเก็บใน word01
    for (let i = 0; i < divide * number; i += number) {
        word01.push(str.substr(i, number).toLowerCase());
    }
    // แบ่งข้อความส่วนที่เหลือและเก็บใน word02
    for (let j = divide * number; j < str.length; j += number - 1) {
        word02.push(str.substr(j, number - 1).toLowerCase());
    }

    const checkW01 = word01; // ข้อมูลที่ตรวจสอบจาก word01
    const checkW02 = []; // ข้อมูลที่ตรวจสอบและแปลงจาก word02

    // ตรวจสอบและรวมข้อความย่อยจาก word02
    for (let c = 1; c < word02.length; c++) {
        if (word02[c - 1].length === 2 && word02[c].length === 2) {
            // กรณีข้อความย่อยมีความยาว 2
            checkW02.push(word01[c - 1][1] + word01[c - 1][2] + word02[c - 1][0]);
            checkW02.push(word02[c - 1][1] + word02[c]);
        } else {
            checkW02.push(word02[c - 1]);
        }
    }

    // รวมข้อความจาก checkW01 และ checkW02
    const srw = checkW01.map(item => item.substr(number - 3, 3))
        .concat(checkW02.map(item => item.substr(0, 3)));

    // คำนวณค่าลำดับ ASCII ของแต่ละกลุ่มข้อความ
    const ascii = srw.map(item => [...item]
        .reduce((acc, curr) => acc + '/abcdefghijklmnopqrstuvwxyz'.indexOf(curr), 0));

    const difference = Math.abs(ascii[1] - ascii[0]); // คำนวณค่าความต่าง (difference)
    const result = []; // เก็บตัวอักษรลับที่ได้

    // ตรวจสอบความต่างและดึงตัวอักษรที่ตรงเงื่อนไข
    for (let i = 0; i < ascii.length - 1; i++) {
        if (Math.abs(ascii[i] - ascii[i + 1]) === difference) {
            result.push(srw[i][1]);
        } else throw "Unable to find secret character value"; // กรณีไม่ตรงเงื่อนไข
    }

    // ตรวจสอบความต่างของกลุ่มข้อความสุดท้าย
    if (Math.abs(ascii[ascii.length - 2] - ascii[ascii.length - 1]) === difference) {
        result.push(srw[srw.length - 1][1]);
    }

    return result.join(''); // คืนค่าคำลับที่ได้
}

// ตัวอย่างการใช้งาน
console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)); // secret
console.log(secretWord("aheiayd", 3)); // hey
