function makeValley(arr) {
    // Given an array, sort the list in descending order from each side, making a valley
    let a = [], b = []    
    arr.sort((x, y) => y - x)
      .forEach((x, i) => i % 2==0 ? b.push(x) : a.unshift(x)    
    return b.concat(a)
}
