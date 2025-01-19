function equation(equation) {
  const operators = []; // เก็บตัวดำเนินการ (+, -, *, /)
  const numbers = []; // เก็บตัวเลขจากสมการ
  let currentNumber = ""; // เก็บตัวเลขที่กำลังอ่านอยู่

  // แยกตัวเลขและตัวดำเนินการจากสมการ
  for (let char of equation) {
      if ("+-*/".includes(char)) { 
          // ถ้าพบตัวดำเนินการ ให้เก็บตัวเลขก่อนหน้าและตัวดำเนินการลงใน array
          numbers.push(parseFloat(currentNumber)); // แปลงตัวเลขจาก string เป็นตัวเลข
          operators.push(char); // เก็บตัวดำเนินการ
          currentNumber = ""; // รีเซ็ตตัวเลขปัจจุบัน
      } else {
          currentNumber += char; // ถ้าเป็นตัวเลข ให้ต่อ string เข้าด้วยกัน
      }
  }

  // เก็บตัวเลขตัวสุดท้ายเข้า array
  numbers.push(parseFloat(currentNumber));

  // คำนวณสมการทีละขั้นตอนจนกว่าตัวดำเนินการจะหมด
  while (operators.length > 0) {
      const operator = operators.shift(); // ดึงตัวดำเนินการตัวแรกออกมา
      const num1 = numbers.shift(); // ดึงตัวเลขตัวแรกออกมา
      const num2 = numbers.shift(); // ดึงตัวเลขตัวถัดมาออกมา

      let result; // เก็บผลลัพธ์การคำนวณ
      switch (operator) {
          case "+": 
              result = num1 + num2; // บวก
              break;
          case "-": 
              result = num1 - num2; // ลบ
              break;
          case "*": 
              result = num1 * num2; // คูณ
              break;
          case "/": 
              result = num1 / num2; // หาร
              break;
          default:
              throw new Error("Invalid operator"); // ถ้าเป็นตัวดำเนินการที่ไม่รู้จัก ให้แจ้งข้อผิดพลาด
      }

      // เก็บผลลัพธ์กลับเข้า array ของตัวเลข (สำหรับการคำนวณรอบถัดไป)
      numbers.unshift(result);
  }

  return numbers[0]; // ผลลัพธ์สุดท้ายหลังการคำนวณ
}

// ตัวอย่างการใช้งาน
console.log(equation("1+1"));       // Output: 2
console.log(equation("7*4-2"));     // Output: 26
console.log(equation("1+1+1+1+1")); // Output: 5
