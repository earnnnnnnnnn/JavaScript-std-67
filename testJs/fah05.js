function rotateArray(arr, k) {
    const n = arr.length; // หาความยาวของอาร์เรย์
    k = k % n;  // ในกรณีที่ k เกินขนาดอาร์เรย์ จะทำการลด k ให้เหลือเท่าขนาดที่ต้องการ
    return [...arr.slice(-k), ...arr.slice(0, n - k)]; // แบ่งอาร์เรย์แล้วรวมส่วนที่ถูกหมุนไว้ข้างหน้า
}
const arr = [1, 2, 3, 4, 5];
const k = 7;
console.log("Array after rotation:", rotateArray(arr, k)); // [4, 5, 1, 2, 3]