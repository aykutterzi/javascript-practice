function entries(obj) {
  let arr = [];

  for (key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}
