function repeat(str, num) {
  let finalStr = "";
  for (let i = 0; i < num; i++) {
    finalStr = finalStr.concat(str);
  }
  return finalStr;
}
