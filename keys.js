function keys(obj) {
  let objArr = [];

  for (let key in obj) {
    objArr.push(key);
  }
  return objArr;
}
