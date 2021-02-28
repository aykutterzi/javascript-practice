function stringIndexOf(word, letter) {
  let index = -1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      index = i;
      break;
    }
  }
  return index;
}
