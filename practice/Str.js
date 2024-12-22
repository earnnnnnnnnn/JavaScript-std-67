let text = 'this is a string';
let firstName = "John";
let lastName = "Done";
// let greet = firstName + " " + lastName ;
let greet = `Hello,My name is ${firstName} ${lastName}`;

let price = 100;
let VAT = 0.07;
let totalPrice = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(totalPrice);
console.log(greet);
console.log(greet.length);