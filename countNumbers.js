function countNumbers(arr) {
  let count = 0;
  for (let val of arr) {
    let valToNumber = parseInt(val);
    let isValNaN = isNaN(valToNumber);
    if (isValNaN === false) {
      count++;
    }
  }
  return count;
}
