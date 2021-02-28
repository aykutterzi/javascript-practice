function includes(array, value, index = 0) {
  let includes = false;
  for (let i = index; i < array.length; i++) {
    if (array[i] === value) {
      includes = true;
    }
  }
  return includes;
}
