// ฟังก์ชัน test ใช้ในการตรวจสอบค่าของตัวแปร t
function test(t){
    // ถ้าค่าของ t เป็น undefined (ยังไม่ได้กำหนดค่า)
    if(t === undefined) {
        return "Undefined value!"; // คืนค่า "Undefined value!" ถ้าค่าของ t เป็น undefined
    }

    // ถ้าค่าของ t ไม่ใช่ undefined คืนค่า t ตามที่รับมา
    return t;
}

// กำหนดค่าตัวแปร x เป็น 5
let x = 5;

// ทดสอบฟังก์ชัน test โดยส่งค่า x ซึ่งมีค่าเป็น 5
console.log(test(x)); // คาดหวังผลลัพธ์: 5
