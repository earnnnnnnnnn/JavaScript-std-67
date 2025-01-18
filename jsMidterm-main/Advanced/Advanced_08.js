// Apiwat Ketsawong
// ข้อนี้ยังมีช่องโหว่อยู่

function count_animals(str) {
    // รายชื่อของสัตว์ทั้งหมดที่เราจะใช้ตรวจสอบในสตริง
    const animals = ["dog","cat","bat","cock","cow","pig","fox","ant","bird","lion","wolf","deer","bear","frog","hen","mole","duck","goat"];

    // ตัวแปรสำหรับเก็บผลลัพธ์การตรวจสอบสัตว์
    const checkAnimal01 = [];
    const checkAnimal02 = [];
    const checkText = [];

    // ลูปผ่านรายชื่อสัตว์ทั้งหมด
    for (let i = 0; i < animals.length; i++) {
        let count = 0;  // ตัวแปรนับจำนวนอักขระของสัตว์ในสตริง

        // ลูปผ่านตัวอักษรของสัตว์ในแต่ละคำ
        for (let j = 0; j < animals[i].length; j++) {
            // ตรวจสอบว่าอักขระในสัตว์มีอยู่ในสตริงหรือไม่
            if (str.toLowerCase().includes(animals[i][j])) {
                count++;  // ถ้าพบให้นับ
            }
        }

        // ถ้าจำนวนอักขระที่พบครบตามจำนวนอักขระในสัตว์
        if (count === animals[i].length) {
            checkAnimal01.push(animals[i]);  // เก็บคำสัตว์ที่พบ
        }
    }

    // สร้างกลุ่มของคำสัตว์ที่พบในสตริง
    for (let i = 0; i < checkAnimal01.length; i++) {
        let sum = checkAnimal01[i].length;  // เริ่มต้นจำนวนอักขระของสัตว์ในกลุ่ม
        const check = [{name: checkAnimal01[i], length: checkAnimal01[i].length}];  // เก็บสัตว์ในกลุ่ม

        // ลูปตรวจสอบหาคำสัตว์อื่นๆ ที่สามารถรวมกันได้
        for (let j = i + 1; j < checkAnimal01.length; j++) {
            // ตรวจสอบว่าเพิ่มคำสัตว์ในกลุ่มแล้วไม่เกินขนาดของสตริง
            if (sum + checkAnimal01[j].length <= str.length) {
                check.push({name: checkAnimal01[j], length: checkAnimal01[j].length});  // เพิ่มสัตว์ในกลุ่ม
                sum += checkAnimal01[j].length;  // บวกจำนวนอักขระในกลุ่ม
            }
        }
        checkAnimal02.push(check);  // เก็บกลุ่มสัตว์ใน checkAnimal02
    }

    // ลูปผ่านกลุ่มคำสัตว์ที่พบ
    for (let i = 0; i < checkAnimal02.length; i++) {
        let text = str;  // สำรองสตริงต้นฉบับ
        const set = checkAnimal02[i].map(m => m.name);  // สร้างชุดของชื่อสัตว์ที่พบในกลุ่ม

        // ลูปตรวจสอบและแทนที่ตัวอักษรในคำสัตว์ด้วย '-'
        for (let j = 0; j < set.length; j++) {
            for (let char of set[j]) {
                if (text.includes(char)) {
                    text = text.replace(char, '-');  // แทนที่ตัวอักษรด้วย '-'
                }
            }
        }
        checkText.push({text: text.replace(/-/gi, ''), name: set});  // เก็บผลลัพธ์ของสตริงที่ถูกแทนที่และชื่อสัตว์
    }

    // เรียงลำดับผลลัพธ์จากสตริงที่ยาวที่สุดไปยังสั้นที่สุด
    const sort = checkText.map(m => m.text).sort((a, b) => a.length - b.length);
    
    // ค้นหากลุ่มที่มีข้อความที่สั้นที่สุด
    const result = checkText.find(item => item.text === sort[0]).name;

    // ลูปผ่านข้อความที่ถูกแทนที่และตรวจสอบการเพิ่มคำสัตว์ในผลลัพธ์
    for (let i = 0; i < checkText[0].text.length; i += result[0].length) {
        if (result[0] === checkText[0].text.substr(i, result[0].length)) {
            result.push(checkText[0].text.substr(i, result[0].length));  // เพิ่มคำสัตว์ในผลลัพธ์
        }
    }

    // คืนค่าจำนวนคำสัตว์ที่พบ
    return result.length;
}

// ทดสอบฟังก์ชัน
console.log(count_animals("goatcode"));  // คาดว่าจะได้ 1
console.log(count_animals("cockdogwdufrbir"));  // คาดว่าจะได้ 2 (cock, dog)
console.log(count_animals("dogdogdogdogdog"));  // คาดว่าจะได้ 5 (dog 5 ครั้ง)
