// function showMessage(){
//     alert('This is an i External script! ');
// }

const car = {
    make: "Mercedes-Brnz",
    model: "A - Class",
    year: 2024,
    
    //Method
    displayInfo(){
        console.log(`${this.make} ${this.model}, Year: ${this.year}`);
    }
};

console.log(car.make);
console.log(car.model);
console.log(car.year);
car.displayInfo();

const date = new Date();
console.log(date);

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayInfo = function(){
        console.log(`${this.make} ${this.model}, Year: ${this.year}`);
    }

}

const car1 = new Car("earn","S-Class", 2024);
const car2 = new Car("viv","M-Class", 2024);

console.log(car1);
console.log(car2);