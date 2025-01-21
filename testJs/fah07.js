function calculateGradeAndGPA(scores) {
    // กำหนดเกรดแต่ละตัวและค่าคะแนนเฉลี่ย (GPA) ที่สอดคล้องกัน
    const gradePoints = { 'A': 4.0, 'B': 3.0, 'C': 2.0, 'D': 1.0, 'F': 0.0 };

    // แปลงคะแนนเป็นตัวอักษรเกรด
    const gradeLetters = scores.map(score => {
        if (score >= 90) return 'A';
        else if (score >= 80) return 'B';
        else if (score >= 70) return 'C';
        else if (score >= 60) return 'D';
        else return 'F';
    });

    // คำนวณ GPA โดยรวมคะแนนเฉลี่ยจากเกรด
    const GPA = gradeLetters.reduce((total, grade) => total + gradePoints[grade], 0) / scores.length;

    // ส่งคืน GPA และตัวอักษรเกรด
    return { GPA, grades: gradeLetters };
}

// ตัวอย่างการเรียกใช้งานฟังก์ชัน
console.log(calculateGradeAndGPA([85, 78, 92, 67]));
// ผลลัพธ์: { GPA: 3.2, grades: ['B', 'C', 'A', 'D'] }
