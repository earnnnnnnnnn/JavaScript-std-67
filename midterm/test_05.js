function getBudgets(sum){
    let result = sum.reduce((total, person) => total + person.budget, 0);
    return result;
}


console.log(getBudgets([
    {name: "John",age:21,budget:23000 },
    {name: "Steve",age:21,budget:40000 },
    {name: "Martin",age:21,budget:2700 }
]));
console.log(getBudgets([
    {name: "John",age:21,budget:29000 },
    {name: "Steve",age:21,budget:32000 },
    {name: "Martin",age:21,budget:1600 }
]));