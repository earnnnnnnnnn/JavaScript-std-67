// <!-- เมื่อกดปุ่มจะหายไป -->
// <button onclick="this.style.display= 'none ' ">Click to remove</button>


console.log(this);

function myfunc() {
    console.log("This inside a function",this);
}
myfunc();

const person = {
    fristName : "John",
    lastName : "Doe",
    fullName() {
        return this.fristName + " " + this.lastName;

    }
}

console.log(person.fullName());
