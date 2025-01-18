// กำหนดค่าของตัวแปร x และ y
let x = 5;
let y = 2;

// คำนวณผลลัพธ์จากการคูณ x และ y แล้วเก็บไว้ในตัวแปร z
let z = x * y;

// คำนวณผลลัพธ์จากการยกกำลัง x ยกกำลัง y แล้วเก็บไว้ในตัวแปร a
let a = x ** y;

// แสดงผลลัพธ์ของการคูณ (z) ในพารากราฟที่มี id เป็น "demo1"
document.getElementById("demo1").innerHTML = z;

// แสดงผลลัพธ์ของการยกกำลัง (a) ในพารากราฟที่มี id เป็น "demo2"
document.getElementById("demo2").innerHTML = a;
