function numDay(Day1,Day2) {
    Day1 = new Date(Day1)
    Day2 = new Date(Day2)
    let cal_Day = Math.abs(Day1-Day2)/1000
    return Math.floor(cal_Day/(60*60*24))-1
}
console.log(numDay("June-12-2019","June 20, 2019"))
console.log(numDay("December-28-2018","January 1, 2019"))
console.log(numDay("June-25-2019","July 2, 2019"))