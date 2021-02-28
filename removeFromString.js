function removeFromString(str, index, number) {
  let outputStringArray = str.split("");
  outputStringArray.splice(index, number);
  return outputStringArray.join("");
}
