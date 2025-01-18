// ฟังก์ชัน createQuote รับพารามิเตอร์สองตัว (quote และ callback)
// ฟังก์ชันนี้จะเพิ่มข้อความ "Like I always say, " นำหน้าค่า quote ที่รับมา
// จากนั้นเรียกใช้ฟังก์ชัน callback พร้อมส่งข้อความที่ได้เป็นพารามิเตอร์
function createQuote(quote, callback) {
    let myQuote = "Like I always say, " + quote; // รวมข้อความ
    callback(myQuote); // เรียกใช้ฟังก์ชัน callback พร้อมส่ง myQuote
}

// ฟังก์ชัน logQuote รับพารามิเตอร์ quote และแสดงข้อความที่รับมาพร้อมเพิ่มคำว่า " Yes.."
function logQuote(quote) {
    console.log(quote + ' Yes..'); // แสดงผลข้อความที่ส่งมา
}

// เรียกใช้ฟังก์ชัน createQuote โดยส่งข้อความ "you will getting better!" 
// และส่งฟังก์ชัน logQuote เป็น callback
createQuote("you will getting better!", logQuote); // ผลลัพธ์: Like I always say, you will getting better! Yes..
