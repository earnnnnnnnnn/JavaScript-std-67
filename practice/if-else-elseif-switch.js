let age = 18;
        
//Ternary Operator
let message = (age >= 18) ? "You are an adult" : "You are not an adult"; 
console.log(message);

// if (age >= 18) {
//     console.log("You are an adult")
// } else {
//     console.log("You are not an adult")
// }

let source = 85;
if (source >= 90) {
    console.log("Grade A")
} else if (source >= 80) {
    console.log("Grade B")
} else if (source >= 70) {
    console.log("Grade C")
} else if (source >= 60) {
    console.log("Grade D")
} else {
    console.log("Grade F")
}

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wedensday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;

    default:
    dayName = "Invalid day";
        break;
}

console.log(dayName);