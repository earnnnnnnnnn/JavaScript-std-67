const library = {
    books: [], // เก็บข้อมูลหนังสือทั้งหมดในรูปแบบ Array

    addBook: function (book) {
        // ฟังก์ชันเพิ่มหนังสือใหม่ลงในคลังหนังสือ
        // ตรวจสอบว่าหนังสือที่เพิ่มมีชื่อซ้ำกับที่มีอยู่แล้วหรือไม่
        const duplicate = this.books.some(existingBook => existingBook.title === book.title);
        if (duplicate) {
            // ถ้าชื่อซ้ำจะไม่เพิ่มหนังสือเข้าไป
            console.log(`ไม่สามารถเพิ่มหนังสือ "${book.title}" ได้ เนื่องจากมีอยู่ในคลังแล้ว`);
        } else {
            // ถ้าชื่อไม่ซ้ำจะเพิ่มหนังสือเข้าไปใน Array
            this.books.push(book);
            console.log(`เพิ่มหนังสือ "${book.title}" เรียบร้อยแล้ว`);
        }
    },

    removeBook: function (title) {
        // ฟังก์ชันลบหนังสือออกจากคลังตามชื่อที่ระบุ
        // ใช้ filter เพื่อคืนค่า Array ใหม่ที่ไม่มีหนังสือชื่อนั้น
        this.books = this.books.filter(book => book.title !== title);
        console.log(`ลบหนังสือ "${title}" เรียบร้อยแล้ว`);
    },

    listBooks: function () {
        // ฟังก์ชันแสดงรายชื่อหนังสือทั้งหมดในคลัง
        this.books.forEach((book, index) => {
            // ตรวจสอบสถานะการอ่านของหนังสือ และแสดงข้อมูลหนังสือแต่ละเล่ม
            const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
            console.log(`${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}`);
        });
    },

    getUnreadBooks: function () {
        // ฟังก์ชันส่งคืน Array ของหนังสือที่ยังไม่ได้อ่าน
        return this.books.filter(book => !book.isRead);
    }
};

// เพิ่มหนังสือใหม่ในคลัง
library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

// แสดงรายการหนังสือทั้งหมดในคลัง
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

// แสดงรายการหนังสือที่ยังไม่ได้อ่าน
console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

// ลบหนังสือชื่อ "1984" ออกจากคลัง
library.removeBook("1984");

// แสดงรายการหนังสือที่เหลือในคลัง
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/

module.exports = library;
