const palindrome = (str) => {
  str = str.toLowerCase();

  // reverse the string and print the result of the comparison
  console.log(str == str.split("").reverse().join(""));
};
palindrome("James");
