function twoHighest(arr) {
  let newArr = [];
  let max = arr[0];
  let maxIndex = 0;
  let secondMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  newArr.push(max);
  arr.splice(maxIndex, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  newArr.unshift(secondMax);

  return newArr;
}
