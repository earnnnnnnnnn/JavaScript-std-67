// 1. การกำหนดฟังก์ชัน (Function Definition)
// ฟังก์ชัน printHello จะรับพารามิเตอร์ name และแสดงข้อความ "Hello" พร้อมกับค่าของ name
// จากนั้นจะคืนค่าข้อความที่รวม name กับ " hello!" กลับไป
function printHello(name){
   console.log("Hello " + name);
   return name + " hello!";
}

// แสดงชื่อของฟังก์ชัน printHello โดยใช้คุณสมบัติ .name
console.log(printHello.name);

// 2. การเรียกใช้งานฟังก์ชัน (Function Invocation)
// เรียกใช้ฟังก์ชัน printHello พร้อมส่งค่าพารามิเตอร์เป็น "Anirach !" 
// และเก็บค่าที่ฟังก์ชันคืนกลับไว้ในตัวแปร result
let result = printHello("Anirach !");
console.log(result); // แสดงค่าที่ฟังก์ชันคืนกลับมา
