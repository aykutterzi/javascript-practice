function totalCaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == arr[i][j].toUpperCase()) {
        count += 1;
      }
    }
  }
  return count;
}
