// LibHello.js
const person = {
    name:'Anirach',
    weight: 85
}

function sayHello(){
    console.log("Hello World!")
}

function cube(x) {
    return x*x*x;
}

const add = (a,b) => a+b; //แอโล่ฟังก์ชัน

const status = true;

module.exports = {person, sayHello,cube,add,status}