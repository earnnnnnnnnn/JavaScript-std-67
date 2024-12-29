let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

// สร้างฟังก์ชันเพื่อหา Common Elements
function findCommonElements(arr1, arr2, arr3) {
  // กรองเฉพาะค่าที่มีอยู่ในทุก Array
  return arr1.filter(item => arr2.includes(item) && arr3.includes(item));
}

// เรียกใช้ฟังก์ชัน
let commonElements = findCommonElements(values1, values2, values3);
console.log("Common Elements:", commonElements);