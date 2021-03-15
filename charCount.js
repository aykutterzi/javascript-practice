function charCount(str) {
  // make object to return at end
  let obj = {};
  // loop over string, for each character...
  for (let char of str) {
    char = char.toLowerCase();
    // ignore space, period etc.
    if (/[a-z0-9]/.test(char)) {
      // if char is a key in object, add one to count
      obj[char] = ++obj[char] || 1;
    }
  }
  // return object at end
  return obj;
}
