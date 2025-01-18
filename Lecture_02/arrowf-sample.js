// ฟังก์ชันลูกศรที่มีพารามิเตอร์สองตัว (Arrow function with two arguments)
// ฟังก์ชัน sum รับค่าพารามิเตอร์สองตัว (firstParam และ secondParam) แล้วคืนค่าผลรวมของทั้งสอง
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};

console.log(sum(2, 5)); // แสดงผล: 7

// ฟังก์ชันลูกศรที่ไม่มีพารามิเตอร์ (Arrow function with no arguments)
// ฟังก์ชัน printHello ไม่รับพารามิเตอร์ และแสดงข้อความ "hello"
const printHello = () => {
    console.log("hello");
};

printHello(); // แสดงผล: hello

// ฟังก์ชันลูกศรที่มีพารามิเตอร์เดียว (Arrow functions with a single argument)
// ฟังก์ชัน checkWeight รับค่าพารามิเตอร์ weight และแสดงข้อความพร้อมน้ำหนักกระเป๋า
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // แสดงผล: Baggage weight : 25 kilograms.

// ฟังก์ชันลูกศรแบบย่อ (Concise arrow functions)
// ฟังก์ชัน multiply รับพารามิเตอร์สองตัว (a และ b) และคืนค่าผลคูณของทั้งสอง
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // แสดงผล: 60
