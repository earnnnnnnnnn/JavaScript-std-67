function numberSplit(num) {
  // แบ่งตัวเลข num ออกเป็น 2 ส่วน โดยใช้ Math.floor และ Math.ceil
  return [Math.floor(num / 2), Math.ceil(num / 2)]; 
}

console.log(numberSplit(4));  // แสดงผล: [2, 2] เพราะ 4 แบ่งออกเป็น 2 ส่วนเท่ากัน
console.log(numberSplit(10)); // แสดงผล: [5, 5] เพราะ 10 แบ่งออกเป็น 2 ส่วนเท่ากัน
console.log(numberSplit(11)); // แสดงผล: [5, 6] เพราะ 11 แบ่งออกเป็น 5 และ 6 (ผลการปัดเศษของการหาร)
console.log(numberSplit(-9)); // แสดงผล: [-5, -4] เพราะ -9 แบ่งออกเป็น -5 และ -4 (ผลการปัดเศษของการหาร)
