// Apiwat Ketsawong

function longestValidParentheses(str) {
    let maxLen = 0; // ตัวแปรเก็บความยาวของวงเล็บที่ถูกต้องที่ยาวที่สุด
    const stack = [-1]; // Stack เริ่มต้นที่ -1 เพื่อใช้เป็นฐานสำหรับการคำนวณ

    // ลูปผ่านทุกตัวอักษรในสตริง
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === '(') { // ถ้าพบวงเล็บเปิด
            stack.push(i); // เพิ่มตำแหน่งปัจจุบันลงใน Stack
        } else { // ถ้าพบวงเล็บปิด
            stack.pop(); // Pop ค่าออกจาก Stack
            if (stack.length === 0) { // ถ้า Stack ว่าง (ไม่มีวงเล็บเปิดตรงกัน)
                stack.push(i); // เพิ่มตำแหน่งปัจจุบันลงใน Stack เป็นฐานใหม่
            } else { // ถ้า Stack ยังมีค่าว่าง
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]); // คำนวณความยาวของวงเล็บที่ถูกต้อง
            }
        }
    }

    // ถ้าไม่มีวงเล็บที่ถูกต้องเลย
    return maxLen === 0 ? "no partners :-{" : maxLen; // ถ้า maxLen เป็น 0 แสดงว่าไม่มีวงเล็บที่ถูกต้อง
}

// ตัวอย่างการใช้งาน
console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses("()))))(()())(")); // 6
