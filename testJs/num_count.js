function countNum(num) {
    num = num.split('')
    let found = 0
    for (let j = 0; j < num.length; j++) {
      if (!isNaN(num[j])) {
        found += 1
      }
    }
  
    return found
  }
  console.log(countNum("123a57"))
  console.log(countNum("ba45n7"))
  console.log(countNum("javascript"))
  