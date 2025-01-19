const cat = { // สร้าง object cat
    name: "Pipey", // กำหนดค่า name เป็น "Pipey"
    age: 8, // กำหนดค่า age เป็น 8

    // สร้าง method whatName เพื่อดึงค่า name ของ cat
    whatName() {
        return this.name; // คืนค่าชื่อของ cat โดยใช้ "this" เพื่ออ้างถึงตัว object cat
    },
};

console.log(cat.whatName()); // เรียกใช้ method whatName และแสดงผล "Pipey"

cat.name = "Nezzar"; // เปลี่ยนค่า name ของ cat เป็น "Nezzar"
console.log(cat.whatName()); // เรียกใช้ method whatName อีกครั้งและแสดงผล "Nezzar"
