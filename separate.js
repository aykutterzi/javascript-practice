function separate(arr) {
  let newArr = [];

  for (let val of arr) {
    if (val === "cat") {
      newArr.push("cat");
    }
  }
  for (let val of arr) {
    if (val === "water") {
      newArr.push("water");
    }
  }
  for (let val of arr) {
    if (val === "dog") {
      newArr.push("dog");
    }
  }
  return newArr;
}
