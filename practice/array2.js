const person ={
    firstName : "John",
    lastName : "Doe",
    age : 30
}

let {firstName: fn, lastName:ln ,age:a , cuntry = "Newyork"} = person;
console.log(fn,ln,a ,cuntry);

const fruits = ["apple","orange","Mango"];
let [fruits1, ,fruits3] = fruits;
console.log(fruits1,fruits3);

const numbers = [10,20,30,40,50,60,70,80];
const[num1,num2, ...rest] = numbers;
console.log(num1);
console.log(num2);
console.log(rest);

let firstName = "John";
let lastName = "Doe";

[firstName, lastName] = [lastName,firstName]
console.log(firstName,lastName)
