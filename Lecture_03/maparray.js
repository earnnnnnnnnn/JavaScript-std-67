const finalPartipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"]; // กำหนด array ที่มีชื่อของผู้เข้าร่วมการแข่งขัน

// ใช้ map เพื่อสร้าง array ใหม่ที่เพิ่มข้อความสำหรับแต่ละสมาชิก
const announcements = finalPartipants.map((member) => {
    return member + " joined the contest."; // สำหรับแต่ละสมาชิกใน array จะเพิ่มข้อความ "joined the contest."
});

console.log(announcements); // แสดงผล array ใหม่ที่ประกอบด้วยข้อความการเข้าร่วมของแต่ละคน
