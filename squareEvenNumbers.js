function squareEvenNumbers(arr) {
  let squaredEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      squaredEven += arr[i] * arr[i];
    }
  }
  return squaredEven;
}
