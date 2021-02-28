function slice(arr, start, end = arr.length) {
  let newArr = [];
  if (end > arr.length) {
    end = arr.length;
  }
  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
