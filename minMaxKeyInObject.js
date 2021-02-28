function minMaxKeyInObject(obj) {
  let minKey = Infinity;
  let maxKey = -Infinity;

  for (let key in obj) {
    let keyNum = +key;

    if (keyNum < minKey) {
      minKey = keyNum;
    }

    if (keyNum > maxKey) {
      maxKey = keyNum;
    }
  }

  return [minKey, maxKey];
}
