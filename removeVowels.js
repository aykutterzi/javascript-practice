function removeVowels(str) {
  let vowels = "aeiouAEIOU";
  let newString = "";

  for (let char of str) {
    if (!vowels.includes(char)) {
      newString += char;
    }
  }
  return newString;
}
