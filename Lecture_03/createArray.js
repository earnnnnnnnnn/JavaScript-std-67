let arrayLength = 7; // กำหนดความยาวของ array ที่ต้องการ
let arr1 = []; // สร้าง array ว่าง
let arr2 = Array(arrayLength); // สร้าง array ที่มีความยาว 7 แต่ไม่มีค่าเริ่มต้น
let arr3 = ['A', false, 5]; // สร้าง array ที่มีค่าคงที่ ('A', false, 5)

// การตรวจสอบความยาวของ array แต่ละตัว
console.log(arr1.length); // แสดงความยาวของ arr1 ซึ่งเป็น 0 (เพราะ array ว่าง)
console.log(arr2.length); // แสดงความยาวของ arr2 ซึ่งเป็น 7 (ตามที่กำหนดไว้)
console.log(arr3.length); // แสดงความยาวของ arr3 ซึ่งเป็น 3 (เพราะมี 3 ค่า)

// การเข้าถึงค่าใน array
console.log(arr3[0]); // แสดงค่าในตำแหน่งที่ 0 ของ arr3 ซึ่งคือ 'A'
console.log(arr3[2]); // แสดงค่าในตำแหน่งที่ 2 ของ arr3 ซึ่งคือ 5
