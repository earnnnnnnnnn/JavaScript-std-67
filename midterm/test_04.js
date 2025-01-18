function totalVolume(...sum) {
    let total = 0;
    sum.forEach(array => {
      total += array.reduce((acc, val) => acc * val);
    //   console.log(total)
    });
  
    return total;
    
}

console.log(totalVolume([4, 2, 4],[3, 3, 3],[1, 1, 2],[2, 1, 1]));
console.log(totalVolume([2, 2, 2],[2, 1, 1,]));
console.log(totalVolume([1, 1, 1,]));




