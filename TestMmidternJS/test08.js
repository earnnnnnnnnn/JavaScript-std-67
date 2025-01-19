// ฟังก์ชัน simplePair จะหาคู่ของตัวเลขในอาร์เรย์ที่มีผลคูณเท่ากับ n
function simplePair(arr, n) {
    // ลูปผ่านทุกคู่ของตัวเลขในอาร์เรย์
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // ถ้าผลคูณของ arr[i] และ arr[j] เท่ากับ n ให้คืนค่าคู่นั้น
            if (arr[i] * arr[j] === n) {
                return [arr[i], arr[j]];
            }
        }
    }
    // ถ้าไม่พบคู่ที่มีผลคูณเท่ากับ n ให้คืนค่า null
    return null;
}

// ทดสอบฟังก์ชัน
console.log(simplePair([1, 2, 3], 3)); // แสดงผล: [1, 3] เพราะ 1 * 3 = 3
console.log(simplePair([1, 2, 3], 6)); // แสดงผล: [2, 3] เพราะ 2 * 3 = 6
console.log(simplePair([1, 2, 3], 9)); // แสดงผล: null เพราะไม่พบคู่ที่คูณแล้วได้ 9
