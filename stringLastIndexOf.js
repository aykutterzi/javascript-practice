function stringLastIndexOf(str, letter) {
  let index = -1;
  for (let i = str.length; i >= 0; i--) {
    if (str[i] == letter) {
      index = i;
      break;
    }
  }
  return index;
}
