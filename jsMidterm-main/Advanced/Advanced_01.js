// Apiwat Ketsawong

function canMove(piece, fromSquare, toSquare) {
    // สร้าง array สำหรับเก็บข้อมูล file (แนวตั้ง), rank (แนวนอน) และ bool (ตรวจสอบว่าตำแหน่งอยู่ในกระดานหรือไม่)
    const file = [];
    const rank = [];
    const bool = [];

    // ตรวจสอบว่าตำแหน่งเริ่มต้นและตำแหน่งปลายไม่เหมือนกัน
    if (fromSquare != toSquare) {
        const square = [fromSquare, toSquare]; // เก็บตำแหน่งเริ่มต้นและตำแหน่งปลายใน array

        // วนลูปเพื่อแยกข้อมูล file (ตัวอักษร) และ rank (ตัวเลข)
        for (let i = 0; i < square.length; i++) {
            file.push(square[i].charAt(0).toLowerCase()); // ดึงตัวอักษรแรกของตำแหน่งและเปลี่ยนเป็นตัวพิมพ์เล็ก
            rank.push(parseInt(square[i].charAt(1))); // ดึงตัวเลขที่ 2 ของตำแหน่งและแปลงเป็นจำนวนเต็ม

            // ตรวจสอบว่าตำแหน่งอยู่ในกระดานหมากรุกหรือไม่
            const locationChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; // ตัวอักษรที่ถูกต้องสำหรับกระดานหมากรุก
            bool.push(locationChar.includes(file[i]) && (rank[i] >= 1 && rank[i] <= 8)); // ตรวจสอบตัวอักษรและตัวเลขว่าอยู่ในขอบเขตที่กำหนด
        }
    }

    // คำนวณระยะห่างในแนวนอน (file) และแนวตั้ง (rank)
    const ascii = Math.abs(file[0].charCodeAt(0) - file[1].charCodeAt(0)); // หาความต่าง ASCII ของ file
    const number = Math.abs(rank[0] - rank[1]); // หาความต่างระหว่าง rank
    const correct = bool[0] === true && bool[1] === true; // ตรวจสอบว่าตำแหน่งเริ่มต้นและปลายถูกต้องทั้งคู่

    // ตรวจสอบการเคลื่อนที่ของตัวหมากตามประเภท
    while (correct) {
        switch (piece.toLowerCase()) { // ใช้ switch-case สำหรับประเภทตัวหมาก
            case 'pawn': // การเคลื่อนที่ของเบี้ย
                return ascii === 0 && number === 1 && rank[0] < rank[1]; // เดินตรงทีละ 1 ช่องไปด้านหน้าเท่านั้น
            case 'knight': // การเคลื่อนที่ของม้า
                return (ascii !== 0 && number !== 0) && (ascii === 1 && number === 2) || (ascii === 2 && number === 1); // เดินรูปตัว L
            case 'bishop': // การเคลื่อนที่ของบิชอป
                return ascii === number; // เดินเฉียงในแนวเส้นทแยงมุมเท่านั้น
            case 'rook': // การเคลื่อนที่ของเรือ
                return ascii === 0 || number === 0; // เดินตรงในแนวตั้งหรือแนวนอนเท่านั้น
            case 'queen': // การเคลื่อนที่ของควีน
                return ascii === number || ascii === 0 || number === 0; // เดินได้ทั้งแนวตั้ง แนวนอน และแนวทแยงมุม
            case 'king': // การเคลื่อนที่ของคิง
                return (ascii === 0 && number === 1) || (number === 0 && ascii === 1) || (ascii === 1 && number === 1); // เดินได้รอบตัวทีละ 1 ช่อง
            default: // กรณีตัวหมากไม่ถูกต้อง
                return false;
        }
    }

    // คืนค่า false หากตำแหน่งหรือการเคลื่อนที่ไม่ถูกต้อง
    return false;
}

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
console.log(canMove("Rook", "A8", "H8")); // ตรวจสอบว่าเรือเดินจาก A8 ไป H8 ได้หรือไม่
console.log(canMove("Bishop", "D4", "G1")); // ตรวจสอบว่าบิชอปเดินจาก D4 ไป G1 ได้หรือไม่
console.log(canMove("Queen", "C4", "D6")); // ตรวจสอบว่าควีนเดินจาก C4 ไป D6 ได้หรือไม่
console.log(canMove("Pawn", "C4", "C5")); // ตรวจสอบว่าเบี้ยเดินจาก C4 ไป C5 ได้หรือไม่
console.log(canMove("Knight", "D4", "F6")); // ตรวจสอบว่าม้าเดินจาก D4 ไป F6 ได้หรือไม่
console.log(canMove("King", "F5", "D3")); // ตรวจสอบว่าคิงเดินจาก F5 ไป D3 ได้หรือไม่
