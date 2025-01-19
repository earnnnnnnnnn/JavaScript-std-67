// ฟังก์ชัน getBudgets ใช้ในการคำนวณงบประมาณรวมจากข้อมูลของแต่ละคนในอาร์เรย์
function getBudgets(arr) {
    let totalBudget = 0; // ตัวแปรเก็บผลรวมงบประมาณ
    for (let person of arr) { // วนลูปผ่านแต่ละคนในอาร์เรย์
        totalBudget += person.budget; // เพิ่มงบประมาณของแต่ละคน
    }
    return totalBudget; // คืนค่าผลรวมงบประมาณ
}

console.log(getBudgets([ 
    { name: "John", age: 21, budget: 23000 },  // งบประมาณของ John
    { name: "Steve", age: 32, budget: 40000 }, // งบประมาณของ Steve
    { name: "Martin", age: 16, budget: 2700 }  // งบประมาณของ Martin
]));

console.log(getBudgets([ 
    { name: "John", age: 21, budget: 29000 },  // งบประมาณของ John
    { name: "Steve", age: 32, budget: 32000 }, // งบประมาณของ Steve
    { name: "Martin", age: 16, budget: 1600 }  // งบประมาณของ Martin
]));
