function stringIncludes(str, char) {
  let includes = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      continue;
    } else {
      includes = true;
    }
  }
  return includes;
}
