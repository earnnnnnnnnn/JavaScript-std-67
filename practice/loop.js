let fruits = ["Apple","banana","orange","grape","mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    // const element = fruits[i];
    // console.log(element);
}

for (let i = 1; i <= 5 ; i++) {
    console.log("number " + i);            
}

let person = {
    name : "Jahn Doe",
    age : 30,
    city: "New york"
}

for (let key in person){
    console.log(key + ": " + person[key]) ;
}

let cars = ["Honda","Toyota","Nissan"];
for(let car of cars){
    console.log(car);
}

//while Loop
let i = 0;
while (i <+ 5) {
    console.log(i);
    i++;
}
console.log("*****************************************")
//do while
let x = 0;
do {
    console.log(x);
    x++
} while (x > 5);
