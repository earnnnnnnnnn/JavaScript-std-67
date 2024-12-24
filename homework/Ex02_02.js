function calculateEquation(equation) {
    const operators = [];
    const numbers = [];
    let currentNumber = "";
  
    // แยกตัวเลขและตัวดำเนินการ
    for (let char of equation) {
      if ("+-*/".includes(char)) {
        // เก็บตัวเลขและตัวดำเนินการ
        numbers.push(parseFloat(currentNumber));
        operators.push(char);
        currentNumber = "";
      } else {
        currentNumber += char;
      }
    }
  
    // เพิ่มตัวเลขตัวสุดท้ายเข้าไป
    numbers.push(parseFloat(currentNumber));
  
    // คำนวณทีละขั้นตอน
    while (operators.length > 0) {
      const operator = operators.shift(); // เอาตัวดำเนินการตัวแรก
      const num1 = numbers.shift();       // เอาตัวเลขตัวแรก
      const num2 = numbers.shift();       // เอาตัวเลขตัวถัดไป
  
      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          throw new Error("Invalid operator");
      }
  
      // เก็บผลลัพธ์กลับเข้าใน array ของตัวเลข
      numbers.unshift(result);
    }
  
    return numbers[0]; // ผลลัพธ์สุดท้าย
  }
  
  // ตัวอย่างการใช้งาน
  console.log(calculateEquation("1+1"));       // Output: 2
  console.log(calculateEquation("7*4-2"));     // Output: 26
  console.log(calculateEquation("1+1+1+1+1")); // Output: 5
  