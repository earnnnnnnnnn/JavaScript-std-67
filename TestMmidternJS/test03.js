function capToFront(k) {
  // แยกตัวอักษรทั้งหมดใน string แล้วกรองตัวอักษรที่เป็นตัวพิมพ์ใหญ่ (upperCase)
  let upperCaseChars = k.split('').filter(char => char === char.toUpperCase());
  // แยกตัวอักษรทั้งหมดใน string แล้วกรองตัวอักษรที่เป็นตัวพิมพ์เล็ก (lowerCase)
  let lowerCaseChars = k.split('').filter(char => char === char.toLowerCase());
  // รวมตัวอักษรที่เป็นพิมพ์ใหญ่ไว้ข้างหน้า แล้วตามด้วยตัวอักษรที่เป็นพิมพ์เล็ก
  return upperCaseChars.join('') + lowerCaseChars.join('');
}

console.log(capToFront("hApPy"));   // แสดงผล: "APhpy" เพราะตัวอักษรพิมพ์ใหญ่ถูกย้ายไปข้างหน้า
console.log(capToFront("moveMENT")); // แสดงผล: "MENTmove" เพราะตัวอักษรพิมพ์ใหญ่ถูกย้ายไปข้างหน้า
console.log(capToFront("shOrtCAKE")); // แสดงผล: "OCAKEshrt" เพราะตัวอักษรพิมพ์ใหญ่ถูกย้ายไปข้างหน้า
