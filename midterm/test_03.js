function capToFront(front) {
    const upperCase = front.split("").filter(char => char === char.toUpperCase()); // คัดเฉพาะพิมพ์ใหญ่
    // console.log(upperCase);
    const lowerCase = front.split("").filter(char => char !== char.toUpperCase()); // คัดพิมพ์เล็กและอื่น ๆ
    // console.log(lowerCase);
    const result = upperCase.concat(lowerCase).join(""); // นำพิมพ์ใหญ่ไว้หน้าสุดแล้วรวมกลับเป็น String
    return result;
    
}
console.log(capToFront("hApy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
console.log(capToFront("EaRn"));

