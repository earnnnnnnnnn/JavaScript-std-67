const lang = ["HTML", "CSS", "JS"]; // Arry literal
console.log(lang.length);
// 1 .push();   เพิ่มข้อมูลต่อท้ายสุดอาเรย
// 2 .pop();    ลบข้อมูลตัวสุดท้ายอาเรย
// 3 .shift();  ลบข้อมูลตัวแรกอาเรย
// 4 .unshift(); เพิ่มข้อมูลด้านหน้าอาเรย์
console.log(lang.unshift("Apple"));
console.log(lang);


const cars = new Array("Honda", "Toyota", "Nissan");
console.log(cars);

const concatArray = cars.concat(lang);
console.log(concatArray);